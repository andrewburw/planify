<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\GuestSchedules;
use App\Models\DaySchedules;

class UserProfileController extends Controller
{
    public function getUserInfo()
    {
        //$logedUser =  auth()->user();  // logged in user id
        
        $table= Calendar::where('user_id',auth('api')->user()['id'])->orderBy('created_at', 'desc')->take(4)->get();
          
       
       
        return response()->json([ 'serverError'=>false, 'dataCalendars' =>  $table, 'dataNews'=> $this->getNews()]);
    }
    public function getNews()
    {
        // get latest records as news
        $logeedUserName=  auth()->user()->name;

        if ($logeedUserName === 'guest') {

            return  GuestSchedules::select('*')  // get latest records
            ->leftjoin('calendars', 'calendars.id', '=', 'calendar_id')
            ->orderBy('guest_schedules.id', 'desc')->take(9)->get();
            
        }


    $result = DaySchedules::select('*')  // get latest records
        ->leftjoin('calendars', 'calendars.id', '=', 'calendar_id')
        ->orderBy('day_schedules.id', 'desc')->take(9)->get();
       
         


       return $result;








    }
}
