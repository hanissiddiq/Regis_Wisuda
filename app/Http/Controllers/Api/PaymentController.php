<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\Registration;
use Midtrans\Config;
use Midtrans\Snap;
use Midtrans\Notification;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Log;
use Barryvdh\DomPDF\Facade\Pdf;

class PaymentController extends Controller
{
    //
    public function createTransaction(Request $request)
    {
        $registration = Registration::findOrFail($request->registration_id);

        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');

        // Generate unique order ID
        // $orderId = uniqid();
        $orderId = 'TRX-' . strtoupper(substr(bin2hex(random_bytes(3)), 0, 6));
        // example: TRX-5F2A1B

        $params = [
            'transaction_details' => [
                'order_id' => $orderId,
                'gross_amount' => 1750000
            ],
            'customer_details' => [
                'first_name' => $registration->name,
            ]
        ];

        $snapToken = Snap::getSnapToken($params);

        Payment::create([
            'registration_id' => $registration->id,
            'order_id' => $orderId,
            'gross_amount' => 1750000,
            // 'snap_token' => $snapToken,
            'transaction_status' => 'pending',
        ]);

        return response()->json([
            'snap_token' => $snapToken
        ]);
    }

    public function callback(Request $request)
    {
        Log::info('CALLBACK MASUK');
        Log::info('Masuk ke blok settlement');
    Log::info($request->all());
        

    Config::$serverKey = config('midtrans.server_key');
    Config::$isProduction = config('midtrans.is_production');
    Config::$isSanitized = true;
    Config::$is3ds = true;


        // ✅ Pakai data langsung dari request, bukan new Notification()
    $data = $request->all();
    $orderId = $data['order_id'] ?? null;
    $status  = $data['transaction_status'] ?? null;

    Log::info('Order ID: ' . $orderId . ' | Status: ' . $status);

    $payment = Payment::where('order_id', $orderId)->first();

    if (!$payment) {
        Log::error('Payment not found for order_id: ' . $orderId);
        return response()->json(['message' => 'Payment not found'], 404);
    }

    if ($status == 'settlement') {

        try {
            DB::transaction(function () use ($payment, $data) {

                $registration = $payment->registration;

                $facultyCode = $registration->faculty->code;
                $jurusanCode = $registration->jurusan->code;

                $count = Registration::where('faculty_id', $registration->faculty_id)
                    ->where('jurusan_id', $registration->jurusan_id)
                    ->whereNotNull('registration_number')
                    ->lockForUpdate()
                    ->count() + 1;

                $running = str_pad($count, 4, '0', STR_PAD_LEFT);
                $number  = $facultyCode . $jurusanCode . $running;

                $registration->update([
                    'status'              => 'paid',
                    'registration_number' => $number,
                ]);

                $payment->update([
                    'transaction_status' => 'settlement',
                    'payment_type'       => $data['payment_type'] ?? null,
                    'transaction_time'   => now(),
                ]);

                Log::info('Payment settlement berhasil: ' . $payment->order_id);
            });

        } catch (\Exception $e) {
            Log::error('DB Transaction error: ' . $e->getMessage());
            return response()->json(['message' => 'Server error'], 500);
        }

    } elseif ($status == 'pending') {

        $payment->update(['transaction_status' => 'pending']);

    } elseif (in_array($status, ['expire', 'cancel', 'deny'])) {

        $payment->update(['transaction_status' => $status]);
    }

    return response()->json(['success' => true]);
}

    public function show($orderId)
    {
        $payment = Payment::with('registration')
            ->where('order_id', $orderId)
            ->firstOrFail();

        if (!$payment) {
        return response()->json([
            'message' => 'Payment not found'
        ], 404);
        }

        return response()->json($payment);
    }

    public function downloadPdf($id)
    {
        $payment = Payment::with('registration')->findOrFail($id);

        $pdf = Pdf::loadView('pdf.payment', compact('payment'));

        return $pdf->download('bukti-pembayaran.pdf');
    }
}
