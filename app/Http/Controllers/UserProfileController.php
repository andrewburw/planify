<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calendar;

class UserProfileController extends Controller
{
    public function getUserInfo(Request $request)
    {
        $logedUser =  auth()->user();  // logged in user id
        
        $table= Calendar::where('user_id',auth('api')->user()['id'])->get();
          
       
       
        return response()->json([ 'serverError'=>false, 'data' =>  $table]);
    }
}
