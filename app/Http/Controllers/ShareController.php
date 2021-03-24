<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
//use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\CalendarAuthors;

class ShareController extends Controller
{
    public function showSharedUsers(Request $request)
    {
        // get user shared calendars

        $validator = Validator::make($request->all(), [
            'calendar_id' => ['required', 'string','max:255']
           ]);

        if ($validator->fails()) {
            // if validation not pased return errors

            return response()->json([ 'serverError'=>true, 'error' => $validator->errors()]);
        }


        
        $logedUser =  auth()->user()->id;  // logged in user id
        $data = $request->all();
        /*                     ___________________________
          CalendarAuthors =>  | user_id  | calendar_id   |

        */

        $tableAdmin = Calendar::select('name')  // get calendar authors name
        ->join('users', 'users.id', '=', 'user_id')
        ->where('calendars.id', $data['calendar_id'])
        ->get();
        //['name' => $tableAdmin['name'] . "[admin]"]

        $calendarAdmin = ['name' => $tableAdmin[0]['name'] . " [admin]"];

        $result = CalendarAuthors::select('name')
      ->join('users', 'users.id', '=', 'user_id')
      ->where('calendar_authors.calendar_id', $data['calendar_id'])
      ->get();
      
       return response()->json( $result->push(['name'  => $tableAdmin[0]['name'] . " [admin]"]));

    }

    /**
     * Show calendars shared calendars.
     *
     *
     */

    public function showSharedCalendars(Request $request)
    {

     // get user shared calendars
        $logedUser =  auth()->user()->id;  // logged in user id
        $data = $request->all();
        /*                     ___________________________
          CalendarAuthors =>  | user_id  | calendar_id   |

        */


        $result = Calendar::select('calendar_name', 'calendar_id')
        ->join('calendar_authors', 'calendar_authors.calendar_id', '=', 'calendars.id')
        ->where('calendar_authors.user_id', $logedUser)
        ->get();


        return response()->json($result);
    }
    /**
     * Main share controller function.
     *
     *
     */

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
        $logeedUserName =  auth()->user()->name;  
        $data = $request->all();
        $table = User::where('email', $data['email'])->get();
        $tableOwner = Calendar::where('id', $data['calendar_id'])->get();

        if ($logeedUserName === 'guest') {

            return response()->json(['serverError' => true,'error' => 'Guest not allowed to add users.']);
            
        }
       

        if ($logedUser !==  $tableOwner[0]['user_id']) {
            // PROTECTION:  If you are not table admin return error.

            return response()->json(['serverError'=>true,'error' => 'You are not calendar owner!']);
        }
      
        // *******************************************************************

        if ($table ->isEmpty() || $table[0]['id'] === $logedUser) { // do not add admin to admin calendar :)

            return response()->json(['serverError'=>true,'error' => 'User not found']);
        } else {
            return $this->postData($table[0]['id'], $data['calendar_id']);
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
        $checkIfExists = CalendarAuthors::select('user_id', 'calendar_id') // checking if user is in calendar authors
        ->where('user_id', $user_id)
        ->where('calendar_id', $calendar_id)
        ->get();

       
        if ( !$checkIfExists->isEmpty()) { // If user allredy added return error
            return response()->json(['serverError'=>true,'error' => 'User allredy added!']);
        }

        


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
