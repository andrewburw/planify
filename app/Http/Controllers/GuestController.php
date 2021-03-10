<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Custom\CustomModuleGenerateSchedules;
use App\Models\GuestSchedules;

class GuestController extends Controller
{
    //
    public static function generate()
    {
        $data = CustomModuleGenerateSchedules::generateData();
        $today = date("m.d.y");
        $genDay = GuestSchedules::select('gen_date')->first();
        

        
        if (!$genDay) {
            # protection if table is empty
            $genDay = [['gen_date'=> 'sdf']];
        } else {
            $genDay = $genDay->get();

        }
         

        if ($genDay[0]['gen_date'] !==  $today) {
            // check if day of generation is not today generate new data
            
            GuestSchedules::whereNotNull('id')->delete();// delete all data in table
         
         
            foreach ($data as &$value) {
                self::createDaySchedule($value);
            }
            unset($value);
        }
       
        return true;
    }

    public static function delete( $id )
    {

        $table= GuestSchedules::where('id',  $id )->delete();

       
        if ($table) {
            return   true;
        } else {
            return   false;
        }
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
            'month' => $data['month'],
            'gen_date' => $data['gen_date']

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
