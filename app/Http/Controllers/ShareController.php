<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class ShareController extends Controller
{
    //

    public function shareCalendar(Request $request)
    {
        $validator = Validator::make($request->all(), [
      
        'email' => ['required', 'string', 'email', 'max:255']
      
]);
     

        
        if ($validator->fails()) {
            // if validation not pased return errors

            return response()->json([ 'serverError'=>true, 'error' => $validator->errors()]);
        } else {
            // validation has pased
            $logedUser =  auth()->user()->id;  // logged in user id
            $data = $request->all();
            $table = User::where('email', $data['email'])->get();
            
            if ($table ->isEmpty() || $table[0]['id'] === $logedUser) { // do not add admin to admin calendar :)

                return response()->json(['serverError'=>true,'error' => 'not found']);

            } else {
                return response()->json( $table[0]['id']);
            }
        }
    }
}
