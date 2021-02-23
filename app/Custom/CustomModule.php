<?php
namespace App\Custom;

class CustomModule
{
    public static function RedoData($data)
    {
        $resultArray = json_decode(json_encode($data), true);
        $result = array_filter(
            $resultArray,
            function ($value, $key) use ($resultArray) {
          return $key === array_search($value["day"], array_column($resultArray, "day"));
      },
         ARRAY_FILTER_USE_BOTH
        );
  
        $idDays = array_column($result, "day");
        $newArr = array();
  
      foreach ($idDays as &$value1) {
            array_push($newArr, array('day'=>$value1, 'reserved'=>array_values(array_filter(
                $resultArray,
                function ($value) use ($value1) {
          return $value["day"] == $value1;
      }))));
      }
  
  
        unset($value1);
   
  
 
        // dd($data);
        return json_encode($newArr);
    }
}

/*
$db = array(
  0 =>  [
    "id" => 1,
    "start" => "08:00",
    "end" => "09:00",
    "day" => "47",
    "name" => "andrew",
    "calendar_id" => 1,
    "created_at" => "2021-02-22T13:15:42.000000Z",
    "updated_at" => "2021-02-22T13:15:42.000000Z"
  ],
  1 =>  [
    "id" => 2,
    "start" => "08:00",
    "end" => "09:00",
    "day" => "43",
    "name" => "andrew",
    "calendar_id" => 1,
    "created_at" => "2021-02-22T13:19:30.000000Z",
    "updated_at" => "2021-02-22T13:19:30.000000Z"
  ],
  2 =>  [
    "id" => 3,
    "start" => "08:00",
    "end" => "09:00",
    "day" => "41",
    "name" => "andrew",
    "calendar_id" => 1,
    "created_at" => "2021-02-22T13:20:33.000000Z",
    "updated_at" => "2021-02-22T13:20:33.000000Z"
  ],
  3 =>  [
    "id" => 4,
    "start" => "08:00",
    "end" => "09:00",
    "day" => "41",
    "name" => "andrew",
    "calendar_id" => 1,
    "created_at" => "2021-02-22T18:58:10.000000Z",
    "updated_at" => "2021-02-22T18:58:10.000000Z"
  ]
);
https://phpsandbox.io/n/floral-union-kbmb-t9jd0
*/
