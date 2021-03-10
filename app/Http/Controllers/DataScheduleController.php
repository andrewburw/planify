<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\DaySchedule;
use App\Custom\CustomModule;
use App\Models\GuestSchedules;
use App\Http\Controllers\GuestController; // Class for guest user handled post/show/delete data

class DataScheduleController extends Controller
{
    protected function showWeekScheldues(Request $request)
    {
        // show user day schedules


        $validator = Validator::make($request->all(), [
            'calendar_id' => ['required', 'string', 'min:1', 'max:30']
           
        ]);

        if ($validator->fails()) {
            return response()->json(['serverError' => true, 'errors' => $validator->errors()]);
        }



        $id = $request->all();
        $user =  auth()->user()->name;  // user name 

        if ($user === 'guest') {
            // GUEST USER DATA is generated automaticly and it's fake data :)
            $generatedData = GuestController::generate($id['day']);
            $table= GuestSchedules::where('calendar_id', $id['calendar_id'])->get();
            $test = CustomModule::RedoData($table);

            return   response()->json(array('serverError'=>false,'data'=>$test));
    
        }


        $table= DaySchedule::where('calendar_id', $id['calendar_id'])->get();
        $test = CustomModule::RedoData($table);
        
        return   response()->json(array('serverError'=>false,'data'=>$test));
    }





      // ************  Delete Schedule  ************  \\
      
    protected function deleteScheldule(Request $request)
    {
        // show user day schedules
      
        $id = $request->all();
        $user =  auth()->user()->name;  // user name 
        $table = false;
        $deleteData = false;


        if ($user === 'guest') {
            $deleteData = GuestController::delete($id);
         
        } else {
            $table = DaySchedule::where('id', $id['scId'])->delete();
        }

         

        if ($table || $deleteData) {
            return   response()->json(array('serverError'=>false,'test'=> $deleteData));
        } else {
            return   response()->json(array('serverError'=>true,'test'=> $deleteData));
        }
       
    }
   





    // ************  Create a new day Schedule  ************  \\

    protected function addDaySchedule(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'start' => ['required', 'string', 'min:3', 'max:30'],
            'end' => ['required', 'string', 'min:3', 'max:30'],
            'day' => ['required', 'string', 'min:1', 'max:3'],
            'month'=> ['required', 'string', 'min:1', 'max:2']

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
            'name' => auth('api')->user()->name,
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
                'errors' => 'error in post table'
            ));
        }
    }
}
