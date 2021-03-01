<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// USERS:
Route::post( '/register', 'App\Http\Controllers\Auth\RegisterController@validator' ); // register user route
Route::post('/login',  'App\Http\Controllers\Auth\LoginController@loginUser');   // login user
Route::get('/logout',  'App\Http\Controllers\Auth\LoginController@logoutUser'); // log out user 




Route::middleware('auth:api')->group(function () {

  

    // CALENDAR:

    Route::post( '/newschedule', 'App\Http\Controllers\DataScheduleController@addDaySchedule' ); // post new schedule
    Route::delete( '/delschedule', 'App\Http\Controllers\DataScheduleController@deleteScheldule' ); // post new schedule
    Route::post( '/allchedule', 'App\Http\Controllers\DataScheduleController@showWeekScheldues' ); // get scheldues schedule
  
    

    // our routes to be protected will go in here
    Route::get( '/usercalendars', 'App\Http\Controllers\DataCalendarController@showCalendars' );
    Route::post( '/newcalendar', 'App\Http\Controllers\DataCalendarController@postCalendar' ); // post new calendar 
});

