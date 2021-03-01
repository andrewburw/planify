<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Calendar;
use Illuminate\Http\Request;

class DataCalendarController extends Controller
{
    protected function showCalendars(){
        // show user calendars
        $table= Calendar::where('user_id',auth('api')->user()['id'])->get();
          
        return response()->json($table);
        
    }
      
  // ************  Create a new Calendar  ************  \\ 

    protected function postCalendar(Request $request)
    {
         // dd($request);
       
        $validator = Validator::make($request->all(), [
            'calendar_name' => ['required', 'string', 'min:3']

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
     * Create (POST) a new Calendar after valid name.
     *
     * @param  array  $data
     * @return \App\Models\Calendar
     */



    protected function createCalendar($data)
    {
        $user =  auth()->user()->id;

        $queryResult = Calendar::create([
            'calendar_name' => $data['calendar_name'],
            'user_id' =>  $user 

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
