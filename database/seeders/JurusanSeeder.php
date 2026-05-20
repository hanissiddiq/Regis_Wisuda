<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Jurusan;

class JurusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
         $data = [

            ['id' => 1, 'faculty_id' => 1, 'name' => 'Akuntansi', 'code' => '01'],
            ['id' => 2, 'faculty_id' => 1, 'name' => 'Ekonomi Pembangunan', 'code' => '02'],
            ['id' => 3, 'faculty_id' => 1, 'name' => 'Ekonomi Islam', 'code' => '03'],

            ['id' => 4, 'faculty_id' => 2, 'name' => 'Teknik Sipil', 'code' => '01'],
            ['id' => 5, 'faculty_id' => 2, 'name' => 'Teknik Kimia', 'code' => '02'],
            ['id' => 6, 'faculty_id' => 2, 'name' => 'Teknik Industri', 'code' => '03'],
            ['id' => 7, 'faculty_id' => 2, 'name' => 'Teknik Mesin', 'code' => '04'],

            ['id' => 8, 'faculty_id' => 4, 'name' => 'Administrasi Publik', 'code' => '01'],
            ['id' => 9, 'faculty_id' => 4, 'name' => 'Ilmu Politik', 'code' => '02'],
            ['id' => 10, 'faculty_id' => 4, 'name' => 'Ilmu Komunikasi', 'code' => '03'],
            ['id' => 11, 'faculty_id' => 4, 'name' => 'Hubungan Internasional', 'code' => '04'],
            ['id' => 12, 'faculty_id' => 4, 'name' => 'Administrasi Bisnis', 'code' => '05'],

            ['id' => 13, 'faculty_id' => 5, 'name' => 'Pendidikan Matematika', 'code' => '01'],
            ['id' => 14, 'faculty_id' => 5, 'name' => 'Pendidikan Bahasa Indonesia', 'code' => '02'],
            ['id' => 15, 'faculty_id' => 5, 'name' => 'Pendidikan Fisika', 'code' => '03'],
            ['id' => 16, 'faculty_id' => 5, 'name' => 'Pendidikan Ekonomi', 'code' => '04'],

            ['id' => 17, 'faculty_id' => 7, 'name' => 'Hukum Pidana', 'code' => '01'],
            ['id' => 18, 'faculty_id' => 7, 'name' => 'Hukum Perdata', 'code' => '02'],

            ['id' => 19, 'faculty_id' => 3, 'name' => 'Ilmu Kedokteran', 'code' => '01'],
            ['id' => 20, 'faculty_id' => 3, 'name' => 'Ilmu Gizi', 'code' => '02'],
            ['id' => 21, 'faculty_id' => 3, 'name' => 'Kebidanan', 'code' => '03'],

            ['id' => 22, 'faculty_id' => 6, 'name' => 'Agroteknologi', 'code' => '01'],
            ['id' => 23, 'faculty_id' => 6, 'name' => 'Agribisnis', 'code' => '02'],
            ['id' => 24, 'faculty_id' => 6, 'name' => 'Budidaya Perairan', 'code' => '03'],

            ['id' => 25, 'faculty_id' => 8, 'name' => 'Informatika', 'code' => '01'],
            ['id' => 26, 'faculty_id' => 8, 'name' => 'Sistem Informasi', 'code' => '02'],

        ];

        foreach ($data as $item) {

            Jurusan::updateOrCreate(
                ['id' => $item['id']],
                $item
            );
        }
    }
}
