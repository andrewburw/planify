<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Calendar;

class DataScheduleController extends Controller
{
    
    protected function showCalendars(){
        $table= Calendar::where('user_id',1)->get();
          
            return response()->json($table);
    }


    
     // ************  Create a new Calendar  ************  \\ 
     

    protected function postCalendar(Request $request)
    {
         // dd($request);
        $validator = Validator::make($request->all(), [
            'calendar_name' => ['required', 'string', 'min:3', 'max:30']

        ]);

        if ($validator->fails()) {
            $err = array(
                'serverError' => true,
                'errors' => $validator->errors()
            );

            return response()->json($err);
        } else {
            return  $this->createCalendar($request->all());
        }
    }





    /**
     * Create a new Calendar after valid name.
     *
     * @param  array  $data
     * @return \App\Models\Calendar
     */



    protected function createCalendar($data)
    {


        $queryResult = Calendar::create([
            'calendar_name' => $data['calendar_name'],
            'user_id' => $data['user_id']


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
