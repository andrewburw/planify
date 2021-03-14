<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function getUserInfo(Request $request)
    {
        $logedUser =  auth()->user();  // logged in user id
       
       
        return response()->json([ 'serverError'=>false, 'data' =>   $logedUser]);
    }
}
