<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuestSchedules extends Model
{
    use HasFactory;
    protected $fillable = [
        'calendar_id',
        'start',
        'end',
        'day',
        'name', 
        'month',
        'gen_date'
      
    ];
}
