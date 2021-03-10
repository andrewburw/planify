<?php
namespace App\Custom;

/* *************************************************************
|
|
|                     Generate Schedules file
|
|       *  This file generates data for guest user and posts data to guestschedules DB.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
class CustomModuleGenerateSchedules
{
    public static function generateData(){

        $testData = [];
        $day = 67;
        $today = date("m.d.y");     

        for ($i = 1; $i <= 7; $i++) {
            array_push($testData, ['start'=>'8:00','end'=>'12:00','day' => $day+$i,'name'=>'Andris','calendar_id'=>19,'month'=> '3','gen_date' => $today]);
            array_push($testData, ['start'=>'12:00','end'=>'18:00','day' => $day+$i,'name'=>'guest','calendar_id'=>19,'month'=> '3','gen_date' => $today]);

        }

         return $testData;
    }

    
}

