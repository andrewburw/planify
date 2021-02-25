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
Route::post( '/test', 'App\Http\Controllers\Auth\RegisterController@validator' ); // register user route

//Route::post( '/newschedule', 'App\Http\Controllers\DataScheduleController@postCalendar' );


// CALENDAR:

Route::get( '/usercalendars', 'App\Http\Controllers\DataScheduleController@showCalendars' ); // get users calendars
Route::post( '/newcalendar', 'App\Http\Controllers\DataScheduleController@postCalendar' ); // post new calendar 



// DAY SHCHEDULE:

Route::post( '/newschedule', 'App\Http\Controllers\DataScheduleController@addDaySchedule' ); // post new schedule
Route::post( '/allchedule', 'App\Http\Controllers\DataScheduleController@showWeekScheldues' ); // get scheldues schedule