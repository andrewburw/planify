<?php
namespace App\Custom;

/* *************************************************************
|
|
|                     Generate Schedules file
|
|       *  This file generates data for guest user 
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
class CustomModuleGenerateSchedules
{
    public static function generateData($day,$calendarId){

        $testData = [];
       
        $today = date("m.d.y");     
        $month = date("m");

        for ($i = 0; $i <= 8; $i++) {

            array_push($testData, ['start'=>'8:00','end'=>'12:00','day' => $day+$i,'name'=>'Andris','calendar_id'=>$calendarId,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'12:00','end'=>'18:00','day' => $day+$i,'name'=>'guest','calendar_id'=>$calendarId,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'18:00','end'=>'20:00','day' => $day+$i,'name'=>'Jhon','calendar_id'=>$calendarId,'month'=> $month,'gen_date' => $today]);
       
            array_push($testData, ['start'=>'8:00','end'=>'12:00','day' => $day-$i,'name'=>'Andris','calendar_id'=>$calendarId,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'12:00','end'=>'18:00','day' => $day-$i,'name'=>'guest','calendar_id'=>$calendarId,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'18:00','end'=>'20:00','day' => $day-$i,'name'=>'Jhon','calendar_id'=>$calendarId,'month'=> $month,'gen_date' => $today]);
           
        }

        return $testData;

    }

    
}

