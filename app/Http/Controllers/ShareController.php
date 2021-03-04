<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\CalendarAuthors;

class ShareController extends Controller
{
    
    public function showSharedCalendars(Request $request)
    {
     // get user shared calendars
        $logedUser =  auth()->user()->id;  // logged in user id
        $data = $request->all();
        /*                     ___________________________
          CalendarAuthors =>  | user_id  | calendar_id   |
      
        */


        $result = Calendar::select('calendar_name','calendar_id')
        ->join('calendar_authors', 'calendar_authors.calendar_id', '=', 'calendars.id')
        ->where('calendar_authors.user_id', $logedUser)
        ->get();


        return response()->json($result);



    }


    public function shareCalendar(Request $request)
    {
        $validator = Validator::make($request->all(), [
        'calendar_id' => ['required', 'string','max:255'],
        'email' => ['required', 'string', 'email', 'max:255']]);
     

        
        if ($validator->fails()) {
            // if validation not pased return errors

            return response()->json([ 'serverError'=>true, 'error' => $validator->errors()]);
        }

        //*****************  VALIDATION HAS PASED ******************************/

        $logedUser =  auth()->user()->id;  // logged in user id
        $data = $request->all();
        $table = User::where('email', $data['email'])->get();
            
        if ($table ->isEmpty() || $table[0]['id'] === $logedUser) { // do not add admin to admin calendar :)

            return response()->json(['serverError'=>true,'error' => 'User not found']);
        } else {



           return $this->postData($table[0]['id'],$data['calendar_id']);
           // return response()->json($data);
        }
    }


    /**
     * Post data to  calendar_authors table in db.
     *
     *
     */

    public function postData($user_id, $calendar_id)
    {
        $queryResult = CalendarAuthors::create([
            'user_id' => $user_id,
            'calendar_id' => $calendar_id
           
        ]);

        if ($queryResult) {
            // the query succeed

            return response()->json(['serverError' => false,'status' => 'ok']);
        } else {
            // the query failed
            // Not shore if this works.
            return response()->json(['serverError' => false, 'error' => 'error in post table']);
        }
    }
}
