<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Cookie;



class LogoutController extends Controller
{
    /**
     *  LOGOUT USER FUNCION
     *
     * @return void
     */

    public function logoutUser(Request $request)
    {
       
         $token =  auth()->user()->token();
         $token->revoke();
     
        $cookie = Cookie::forget('token');

        
        return response('{"serverError":"logOut"}')->cookie($cookie);

       
    }
      /**
        *  CHECK USER AUTH
        *
        * @return void
        */ 
        
        public function check(Request $request)
        {
           
          $token =  auth()->user()->name;

          return response()->json(["auth" => true,'user' => $token]);

        }  
}             
