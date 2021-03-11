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
    public static function generateData($day){

        $testData = [];
       
        $today = date("m.d.y");     
        $month = date("m");

        for ($i = 0; $i <= 8; $i++) {

            array_push($testData, ['start'=>'8:00','end'=>'12:00','day' => $day+$i,'name'=>'Andris','calendar_id'=>22,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'12:00','end'=>'18:00','day' => $day+$i,'name'=>'guest','calendar_id'=>22,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'18:00','end'=>'20:00','day' => $day+$i,'name'=>'Jhon','calendar_id'=>22,'month'=> $month,'gen_date' => $today]);
       
            array_push($testData, ['start'=>'8:00','end'=>'12:00','day' => $day-$i,'name'=>'Andris','calendar_id'=>22,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'12:00','end'=>'18:00','day' => $day-$i,'name'=>'guest','calendar_id'=>22,'month'=> $month,'gen_date' => $today]);
            array_push($testData, ['start'=>'18:00','end'=>'20:00','day' => $day-$i,'name'=>'Jhon','calendar_id'=>22,'month'=> $month,'gen_date' => $today]);
           
        }

        return $testData;

    }

    
}

