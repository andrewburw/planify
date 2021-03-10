<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Custom\CustomModuleGenerateSchedules;
use App\Models\GuestSchedules;

class GuestController extends Controller
{
    //
    public static function generate($day)
    {
        $today = date("m.d.y");
        $genDay = GuestSchedules::select('gen_date')->first();
        

        
        if (!$genDay) {
            # protection: if table is empty run generate
            $genDay = [['gen_date'=> 'sdf']];
        } else {
            $genDay = $genDay->get();
        }
         

        if ($genDay[0]['gen_date'] !==  $today) {
            // check if day of generation is not today generate new data

            $data = CustomModuleGenerateSchedules::generateData($day);
            GuestSchedules::whereNotNull('id')->delete();// delete all data in table
         
         
            foreach ($data as &$value) {
                self::createDaySchedule($value);
            }
            unset($value);
        }
       
        return true;
    }

    public static function delete($id)
    {
        $table= GuestSchedules::where('id', $id)->delete();

       
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

    public static function createDaySchedule($data,$name = null,$genDate = null,$auto = true)
    {     
        // $auto = auto generated data. If true - not running query for checking size of table.

        if (!$auto) {
           // checking size of a table, must be less then 65 rows.
            
           $result = GuestSchedules::select('id')->get()->count();
          
           if ( $result >= 65 ){
            return response()->json(array(
                'serverError' => true,
                'errors' => 'Server error : Record limit for guests achived.'
            ));
           }
           

        }

        $queryResult = GuestSchedules::create([
            'start' => $data['start'],
            'end' => $data['end'],
            'day' => $data['day'],
            'name' => $name === null ? $data['name'] :  auth('api')->user()->name,
            'calendar_id' => $data['calendar_id'],
            'month' => $data['month'],
            'gen_date' => $genDate === null ? $data['gen_date'] : date("m.d.y")

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
