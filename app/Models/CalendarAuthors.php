<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CalendarAuthors extends Model
{
   
    use HasFactory;
    protected $fillable = [
        'calendar_id',
        'user_id'
      
      
    ];
}
