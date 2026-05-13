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
            ['name' => 'Teknik', 'code' => '01'],
            ['name' => 'Sains', 'code' => '02'],
            ['name' => 'Kedokteran', 'code' => '03'],
            ['name' => 'Hukum', 'code' => '04'],
            ['name' => 'Bisnis', 'code' => '05'],
        ];

        foreach ($faculties as $faculty) {
            Faculty::firstOrCreate(
                ['code' => $faculty['code']],
                ['name' => $faculty['name']]
            );
        }

        // Seed Jurusans
        $jurusans = [
            ['name' => 'Teknik Informatika', 'code' => '01', 'faculty_code' => '01'],
            ['name' => 'Teknik Elektro', 'code' => '02', 'faculty_code' => '01'],
            ['name' => 'Teknik Mesin', 'code' => '03', 'faculty_code' => '01'],
            ['name' => 'Teknik Sipil', 'code' => '04', 'faculty_code' => '01'],
            ['name' => 'Biologi', 'code' => '01', 'faculty_code' => '02'],
            ['name' => 'Kimia', 'code' => '02', 'faculty_code' => '02'],
            ['name' => 'Fisika', 'code' => '03', 'faculty_code' => '02'],
            ['name' => 'Kedokteran Umum', 'code' => '01', 'faculty_code' => '03'],
            ['name' => 'Ilmu Hukum', 'code' => '01', 'faculty_code' => '04'],
            ['name' => 'Manajemen', 'code' => '01', 'faculty_code' => '05'],
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

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
        ]);
    }
}
