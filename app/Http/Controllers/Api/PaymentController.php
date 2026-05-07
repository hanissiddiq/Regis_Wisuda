<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    //
    public function createTransaction(Request $request)
    {
        $registration = Registration::findOrFail($request->registration_id);

        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');

        $orderId = uniqid();

        $params = [
            'transaction_details' => [
                'order_id' => $orderId,
                'gross_amount' => 150000
            ],
            'customer_details' => [
                'first_name' => $registration->name,
            ]
        ];

        $snapToken = Snap::getSnapToken($params);

        Payment::create([
            'registration_id' => $registration->id,
            'order_id' => $orderId,
            'gross_amount' => 150000,
        ]);

        return response()->json([
            'snap_token' => $snapToken
        ]);
    }

    public function callback(Request $request)
    {
        $notif = new Notification();

        $payment = Payment::where(
            'order_id',
            $notif->order_id
        )->first();

        if (!$payment) {
            return response()->json([
                'message' => 'Payment not found'
            ]);
        }

        if ($notif->transaction_status == 'settlement') {

            DB::transaction(function () use ($payment, $notif) {

                $registration = $payment->registration;

                $facultyCode = $registration->faculty->code;

                $departmentCode = $registration->jurusan->code;

                $count = Registration::where(
                    'faculty_id',
                    $registration->faculty_id
                )
                ->where(
                    'jurusan_id',
                    $registration->jurusan_id
                )
                ->whereNotNull('registration_number')
                ->lockForUpdate()
                ->count() + 1;

                $running = str_pad(
                    $count,
                    4,
                    '0',
                    STR_PAD_LEFT
                );

                $number =
                    $facultyCode .
                    $jurusanCode .
                    $running;

                $registration->update([
                    'status' => 'paid',
                    'registration_number' => $number
                ]);

                $payment->update([
                    'transaction_status' => $notif->transaction_status,
                    'payment_type' => $notif->payment_type,
                    'transaction_time' => now()
                ]);
            });
        }

        return response()->json([
            'success' => true
        ]);
    }
}
