<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Faculty;
use App\Models\Jurusan;
use Illuminate\Http\Request;

class MasterController extends Controller
{
    public function faculties()
    {
        try {
            $faculties = Faculty::select('id', 'name', 'code')
                ->orderBy('name')
                ->get()
                ->map(function ($faculty) {
                    return [
                        'id' => $faculty->id,
                        'name' => $faculty->name,
                        'code' => $faculty->code,
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $faculties,
            ], 200);
        } catch (\Exception $e) {
            \Log::error('Error fetching faculties: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Gagal memuat data fakultas',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function jurusans()
    {
        try {
            $jurusans = Jurusan::select('id', 'name', 'code', 'faculty_id')
                ->with('faculty:id,name')
                ->orderBy('name')
                ->get()
                ->map(function ($jurusan) {
                    return [
                        'id' => $jurusan->id,
                        'name' => $jurusan->name,
                        'code' => $jurusan->code,
                        'faculty_id' => $jurusan->faculty_id,
                        'faculty_name' => $jurusan->faculty?->name ?? null,
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $jurusans,
            ], 200);
        } catch (\Exception $e) {
            \Log::error('Error fetching jurusans: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Gagal memuat data jurusan',
                'error' => $e->getMessage(),
            ], 500);
        }
    }





}

