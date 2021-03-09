<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Custom\CustomModuleGenerateSchedules;
use App\Models\GuestSchedules;

class GuestController extends Controller
{
    //
    public static function generate(){
       $data = CustomModuleGenerateSchedules::generateData();
      

    foreach ($data as &$value) {
      
        self::createDaySchedule($value);
    }
    unset($value); 
        
       return true;


    }


     // ***************************************************************************************************
    // ***************************************************************************************************
    /**
       * Create (POST) a new day GUEST Schedule.
       *
       * 
       */

    public static function createDaySchedule($data)
    {
        $queryResult = GuestSchedules::create([
            'start' => $data['start'],
            'end' => $data['end'],
            'day' => $data['day'],
            'name' => $data['name'],
            'calendar_id' => $data['calendar_id'],
            'month' => $data['month']

        ]);

        if ($queryResult) {
            // the query succeed

            return response()->json(array(
                'serverError' => false,
                'status' => 'ok'
            ));
        } else {
            // the query failed
            // Not shore if this works.
            return response()->json(array(
                'serverError' => true,
                'errors' => 'error in post table generate data.'
            ));
        }
    }
}
