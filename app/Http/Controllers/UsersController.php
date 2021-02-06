<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller {

    public function submitUser(Request $req) {

        return '{"lol":"' .  $req->input('username').'"}';
    }
    
}
