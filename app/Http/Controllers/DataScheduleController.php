<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class DataScheduleController extends Controller {
    //
    protected function postData(Request $request){
        $err = array('serverError' => true,
        'errors' => 'lol');

return response()->json($err);
   }
}
