<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Cookie;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    /**
     *  LOGIN USER FUNCION
     *
     * @return void
     */
    public function loginUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:6']
        ]);
        if ($validator->fails()) {
            return response()->json(['serverError' => true, 'errors' => $validator->errors()->all()]);
            //return response(['errors'=>$validator->errors()->all()], 422);

        }
        $user = User::where('email', $request->email)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Undust')->accessToken;


                return response('{"serverError":false}')->cookie('token', $token, 100000);
                
            } else {

                return response()->json(['serverError' => true, 'errors' => 'Error please try again']);
            }
        } else {

            return response()->json(['serverError' => true, 'errors' => 'Error please try again']);
        }
    }
}
