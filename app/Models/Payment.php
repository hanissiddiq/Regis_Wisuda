<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //
     protected $fillable = [
        'registration_id',
        'order_id',
        'gross_amount',
        'snap_token',
        'transaction_status',
        'payment_type',
        'transaction_time',
    ];

    public function registration()
    {
        return $this->belongsTo(Registration::class);
    }
}
