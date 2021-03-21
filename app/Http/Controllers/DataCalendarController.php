<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Calendar;
use App\Models\CalendarAuthors;
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
        $user =  auth()->user()->name;
        $validator = Validator::make($request->all(), [
            'calendar_name' => ['required', 'string', 'min:3','unique:calendars']

        ]);
        if ($user === 'guest') {

           return response()->json(['serverError' => true,'errors' => 'Guest not allowed to add new calendars.']);
            
        }

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['serverError' => true,'errors' =>  $error]);

        } else {
            return  $this->createCalendar($request->all());
            //return response()->json(['serverError' => true,'errors' => 'test']);
        }
    }






     /**
     * Create (POST) a new Calendar after valid name.
     *
     *
     */



    protected function createCalendar($data)
    {
        $user =  auth()->user()->id;

        $calendarQueryResult = Calendar::create([
            'calendar_name' => $data['calendar_name'],
            'user_id' =>  $user //admin 

        ]);
            
        if ($calendarQueryResult) {
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
                'errors' =>'Error in post'
            ));
        }
    }
}
