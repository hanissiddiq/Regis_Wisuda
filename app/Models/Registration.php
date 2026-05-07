<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    //
    public function faculty()
{
    return $this->belongsTo(Faculty::class);
}

public function jurusan()
{
    return $this->belongsTo(Jurusan::class);
}

public function payment()
{
    return $this->hasOne(Payment::class);
}
}
