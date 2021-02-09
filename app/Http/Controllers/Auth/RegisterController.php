<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(Request $request)
    {
        
            $validator = Validator::make($request->all(), [
                      'name' => ['required', 'string', 'min:3','max:30'],
                      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                      'password' => ['required', 'string', 'min:6', 'confirmed']
            ]);



            if ($validator->fails()) {
                $err = array('serverError' => true,
                              'errors' => $validator->errors());

                return response()->json($err);
                
            } else {
               return  $this->create($request->all());
            }
 
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create($data)
    {
       
        
        $queryResult = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]); 

        if( $queryResult) {
            // the query succeed
         
            return response()->json(array('serverError' => false,
            'status' => 'ok')); 
        } else {
            // the query failed
               // Not shore this works.
            return response()->json(array('serverError' => false,
            'errors' => '{"error":"error in post table"}')); 
        }


    }
}
