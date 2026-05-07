<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([

            'name' => 'required',

            'nim' => 'required|unique:registrations',

            'faculty_id' => 'required|exists:faculties,id',

            'department_id' => 'required|exists:departments,id',

            'address' => 'required',

            'ijazah_sma' => 'required|file|mimes:pdf,jpg,png|max:2048',

            'recommendation_letter' => 'required|file|mimes:pdf,jpg,png|max:2048',
        ]);

        $ijazah = $request->file('ijazah_sma')
            ->store('ijazah', 'public');

        $rekom = $request->file('recommendation_letter')
            ->store('recommendations', 'public');

        $registration = Registration::create([

            'name' => $request->name,

            'nim' => $request->nim,

            'faculty_id' => $request->faculty_id,

            'department_id' => $request->department_id,

            'address' => $request->address,

            'ijazah_sma' => $ijazah,

            'recommendation_letter' => $rekom,

            'status' => 'waiting_payment'
        ]);

        return response()->json($registration);
    }
}
