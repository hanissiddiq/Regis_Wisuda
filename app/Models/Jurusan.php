<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jurusan extends Model
{

protected $guarded = [];

    //
    public function faculty()
{
    return $this->belongsTo(Faculty::class);
}

}
