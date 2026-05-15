<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Registration;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    // $check = Registration::where('user_id', auth()->id())->first();

    //     if ($check) {
    //         return response()->json([
    //             'message' => 'Anda sudah mendaftar'
    //         ], 400);
    //     }

    public function store(Request $request)
    {
        $request->validate([

        // 'user_id' => 'required|exists:users,id',

            'name' => 'required',

            'nim' => 'required|unique:registrations',

            'nik'=> 'required',

            'jenis_kelamin' => 'required',

            'tempat_lahir' => 'required',
            'tanggal_lahir' => 'required|date',
            'agama' => 'required',
            'telepon' => 'required',


            'faculty_id' => 'required|exists:faculties,id',

            // 'department_id' => 'required|exists:departments,id',
            'jurusan_id' => 'required|exists:jurusans,id',


            'provinsi' => 'required',
            'kabupaten' => 'required',
            'kecamatan' => 'required',
            'desa' => 'required',

            'nama_ibu' => 'required',
            'nama_ayah' => 'required',

            'address' => 'required',

            'pas_photo' => 'required|file|mimes:pdf,jpg,png|max:2048',
            'ijazah_sma' => 'required|file|mimes:pdf,jpg,png|max:2048',
            'sk_yudisium' => 'required|file|mimes:pdf,jpg,png|max:2048',

            // 'recommendation_letter' => 'required|file|mimes:pdf,jpg,png|max:2048',
        ]);

        $pas_photo = $request->file('pas_photo')
            ->store('pas_photos', 'public');
        $ijazah = $request->file('ijazah_sma')
            ->store('ijazah', 'public');
        $sk_yudisium = $request->file('sk_yudisium')
            ->store('sk_yudisium', 'public');

        // $rekom = $request->file('recommendation_letter')
        //     ->store('recommendations', 'public');

        $registration = Registration::create([
        //ambil user_id dari token yang sedang login
        'user_id' => auth()->id(),
        

            'name' => $request->name,

            'nim' => $request->nim,

            'nik' => $request->nik,
            'jenis_kelamin' => $request->jenis_kelamin,
            'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => $request->tanggal_lahir,
            'agama' => $request->agama,
            'telepon' => $request->telepon,

            'faculty_id' => $request->faculty_id,

            'jurusan_id' => $request->jurusan_id,

            'provinsi' => $request->provinsi,
            'kabupaten' => $request->kabupaten,
            'kecamatan' => $request->kecamatan,
            'desa' => $request->desa,
            'nama_ibu' => $request->nama_ibu,
            'nama_ayah' => $request->nama_ayah,

            'no_ijazah' => $request->no_ijazah,
            'ipk' => $request->ipk,
            'keterangan_lulus' => $request->keterangan_lulus,
            'no_sk_yudisium' => $request->no_sk_yudisium,
            'tanggal_sk_yudisium' => $request->tanggal_sk_yudisium,
            'tanggal_lulus' => $request->tanggal_lulus,
            'judul_ta' => $request->judul_ta,


            'address' => $request->address,

            'pas_photo' => $pas_photo,
            'ijazah_sma' => $ijazah,
            'sk_yudisium' => $sk_yudisium,

            // 'recommendation_letter' => $rekom,

            'status' => 'waiting_payment'
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Registrasi berhasil',
            'registration' => $registration,]);
    }

    public function downloadPdf($id)
    {
        $registration = Registration::with([
            'faculty',
            'jurusan',
            'payment'
        ])->findOrFail($id);

        $pdf = Pdf::loadView(
            'pdf.registration',
            compact('registration')
        );

        return $pdf->download('bukti-registrasi.pdf');
    }

    public function myRegistration()
{
    $registration = Registration::with([
            'user',
            'jurusan'
        ])
        ->where('user_id', auth()->id())
        ->latest()
        ->first();

    if (!$registration) {
        return response()->json([
            'message' => 'Data registrasi tidak ditemukan'
        ], 404);
    }

    return response()->json($registration);
}
}
