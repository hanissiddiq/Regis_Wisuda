<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GraduationFee extends Model
{
    //
   protected $fillable = [
        'faculty_id',
        'jurusan_id',
        'amount',
        'year',
    ];

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function jurusan()
    {
        return $this->belongsTo(Jurusan::class);
    }
}
