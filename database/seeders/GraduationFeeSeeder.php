<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\GraduationFee;

class GraduationFeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('graduation_fees')->insert([
            [
                'id' => 1,
                'faculty_id' => 1,
                'jurusan_id' => 1,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-20 06:06:28',
                'updated_at' => '2026-05-20 06:06:28',
            ],
            [
                'id' => 3,
                'faculty_id' => 1,
                'jurusan_id' => 2,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:45:45',
                'updated_at' => '2026-05-21 02:46:07',
            ],
            [
                'id' => 4,
                'faculty_id' => 1,
                'jurusan_id' => 3,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:46:33',
                'updated_at' => '2026-05-21 02:46:33',
            ],
            [
                'id' => 5,
                'faculty_id' => 7,
                'jurusan_id' => 17,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:46:50',
                'updated_at' => '2026-05-21 02:46:50',
            ],
            [
                'id' => 6,
                'faculty_id' => 7,
                'jurusan_id' => 18,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:47:08',
                'updated_at' => '2026-05-21 02:47:08',
            ],
            [
                'id' => 7,
                'faculty_id' => 8,
                'jurusan_id' => 25,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:47:31',
                'updated_at' => '2026-05-21 02:47:31',
            ],
            [
                'id' => 8,
                'faculty_id' => 8,
                'jurusan_id' => 26,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:47:47',
                'updated_at' => '2026-05-21 02:47:47',
            ],
            [
                'id' => 9,
                'faculty_id' => 4,
                'jurusan_id' => 8,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:48:05',
                'updated_at' => '2026-05-21 02:48:05',
            ],
            [
                'id' => 10,
                'faculty_id' => 4,
                'jurusan_id' => 9,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:48:21',
                'updated_at' => '2026-05-21 02:48:21',
            ],
            [
                'id' => 11,
                'faculty_id' => 4,
                'jurusan_id' => 10,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:48:37',
                'updated_at' => '2026-05-21 02:48:37',
            ],
            [
                'id' => 12,
                'faculty_id' => 4,
                'jurusan_id' => 11,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:48:52',
                'updated_at' => '2026-05-21 02:48:52',
            ],
            [
                'id' => 13,
                'faculty_id' => 4,
                'jurusan_id' => 12,
                'amount' => 1200000,
                'year' => 2026,
                'created_at' => '2026-05-21 02:49:19',
                'updated_at' => '2026-05-21 02:49:19',
            ],
        ]);
    }
}
