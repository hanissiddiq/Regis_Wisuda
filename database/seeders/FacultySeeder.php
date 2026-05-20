<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Faculty;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $data = [

            [
                'id' => 1,
                'name' => 'Ekonomi',
                'code' => '01',
            ],

            [
                'id' => 2,
                'name' => 'Teknik',
                'code' => '02',
            ],

            [
                'id' => 3,
                'name' => 'Kedokteran',
                'code' => '03',
            ],

            [
                'id' => 4,
                'name' => 'Ilmu Sosial & Politik',
                'code' => '04',
            ],

            [
                'id' => 5,
                'name' => 'Keguruan dan Ilmu Pendidikan',
                'code' => '05',
            ],

            [
                'id' => 6,
                'name' => 'Pertanian',
                'code' => '06',
            ],

            [
                'id' => 7,
                'name' => 'Hukum',
                'code' => '07',
            ],

            [
                'id' => 8,
                'name' => 'Ilmu Komputer',
                'code' => '08',
            ],

        ];

        foreach ($data as $item) {

            Faculty::updateOrCreate(
                ['id' => $item['id']],
                $item
            );
        }
    
    }
}
