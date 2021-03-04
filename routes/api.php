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
Route::post( '/auth/register', 'App\Http\Controllers\Auth\RegisterController@validator' ); // register user route
Route::post('/auth/login',  'App\Http\Controllers\Auth\LoginController@loginUser');   // login user


Route::middleware('auth:api')->group(function () {
    Route::resource('/login/','LogoutController');

    Route::get('/login/logout',  'App\Http\Controllers\Auth\LogoutController@logoutUser'); // log out user 
    Route::get('/login/check',  'App\Http\Controllers\Auth\LogoutController@check');   // this route checks if user is logged in on page load.

    
    // CALENDAR:

    Route::post( '/newschedule', 'App\Http\Controllers\DataScheduleController@addDaySchedule' ); // post new schedule
    Route::delete( '/delschedule', 'App\Http\Controllers\DataScheduleController@deleteScheldule' ); // post new schedule
    Route::post( '/allchedule', 'App\Http\Controllers\DataScheduleController@showWeekScheldues' ); // get scheldues schedule
  
    
    // DAY SCHEDULE:
    
    Route::get( '/usercalendars', 'App\Http\Controllers\DataCalendarController@showCalendars' );
    Route::post( '/newcalendar', 'App\Http\Controllers\DataCalendarController@postCalendar' ); // post new calendar 
   
    // USER SHARE:

    Route::post( '/share', 'App\Http\Controllers\ShareController@shareCalendar' ); // add user to calendar
    Route::get( '/showshare', 'App\Http\Controllers\ShareController@showSharedCalendars' ); // show user shared calendars

});

