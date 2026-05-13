<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Faculty;
use App\Models\Jurusan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed Faculties
        $faculties = [
            ['name' => 'Teknik', 'code' => 'TK'],
            ['name' => 'Sains', 'code' => 'SA'],
            ['name' => 'Kedokteran', 'code' => 'KD'],
            ['name' => 'Hukum', 'code' => 'HK'],
            ['name' => 'Bisnis', 'code' => 'BS'],
        ];

        foreach ($faculties as $faculty) {
            Faculty::firstOrCreate(
                ['code' => $faculty['code']],
                ['name' => $faculty['name']]
            );
        }

        // Seed Jurusans
        $jurusans = [
            ['name' => 'Teknik Informatika', 'code' => 'IF', 'faculty_code' => 'TK'],
            ['name' => 'Teknik Elektro', 'code' => 'EL', 'faculty_code' => 'TK'],
            ['name' => 'Teknik Mesin', 'code' => 'MS', 'faculty_code' => 'TK'],
            ['name' => 'Teknik Sipil', 'code' => 'SL', 'faculty_code' => 'TK'],
            ['name' => 'Biologi', 'code' => 'BI', 'faculty_code' => 'SA'],
            ['name' => 'Kimia', 'code' => 'KM', 'faculty_code' => 'SA'],
            ['name' => 'Fisika', 'code' => 'FK', 'faculty_code' => 'SA'],
            ['name' => 'Kedokteran Umum', 'code' => 'KU', 'faculty_code' => 'KD'],
            ['name' => 'Ilmu Hukum', 'code' => 'IH', 'faculty_code' => 'HK'],
            ['name' => 'Manajemen', 'code' => 'MN', 'faculty_code' => 'BS'],
        ];

        foreach ($jurusans as $jurusan) {
            $faculty = Faculty::where('code', $jurusan['faculty_code'])->first();
            if ($faculty) {
                Jurusan::firstOrCreate(
                    ['code' => $jurusan['code']],
                    [
                        'name' => $jurusan['name'],
                        'faculty_id' => $faculty->id,
                    ]
                );
            }
        }

        // Seed Test User
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
