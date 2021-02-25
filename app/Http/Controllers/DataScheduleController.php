<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\DaySchedule;
use App\Custom\CustomModule;

class DataScheduleController extends Controller
{
    protected function showWeekScheldues(Request $request)
    {
        // show user day schedules
   
        $id = $request->all();
        $table= DaySchedule::where('calendar_id', $id['calendar_id'])->get();
        $test = CustomModule::RedoData($table);
      
        return   $test;
    }
    
    protected function deleteScheldule(Request $request)
    {
        // show user day schedules
  
        $id = $request->all();
        $table= DaySchedule::where('id', $id['scId'])->delete();
        if ($table) {
            return   response()->json(array('serverError'=>false));
        } else {
            return   response()->json(array('serverError'=>true));
        }
       
    }
   
    // ************  Create a new day Schedule  ************  \\

    protected function addDaySchedule(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'start' => ['required', 'string', 'min:3', 'max:30'],
            'end' => ['required', 'string', 'min:3', 'max:30'],
            'day' => ['required', 'string', 'min:1', 'max:3'],
            'username'=> ['required', 'string', 'min:3', 'max:30']

        ]);



        if ($validator->fails()) {
            $err = array(
                'serverError' => true,
                'errors' => $validator->errors()
            );

            return response()->json($err);
        } else {
            return  $this->createDaySchedule($request->all());
            // return dd($request);
        }
    }
    // ***************************************************************************************************
    // ***************************************************************************************************
    /**
       * Create (POST) a new day Schedule after valid data.
       *
       * @param  array  $data
       * @return \App\Models\DaySchedule
       */



    protected function createDaySchedule($data)
    {
        $queryResult = DaySchedule::create([
            'start' => $data['start'],
            'end' => $data['end'],
            'day' => $data['day'],
            'name' => $data['username'],
            'calendar_id' => $data['calendar_id']

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
                'serverError' => false,
                'errors' => '{"error":"error in post table"}'
            ));
        }
    }
}
