<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    protected $guarded = [];
    
public function jurusans()
{
    return $this->hasMany(Jurusan::class);
}
  
}
