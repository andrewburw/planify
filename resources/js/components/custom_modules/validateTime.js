/* *************************************************************
|
|
|                     Validate time custom module
|
|     
|
|       *Used in: menuModalAddEditSch.js
|
|       My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

let basicCompare = {

        morOrLess : function(data){
                var str1 = `${data.start}:00:00`;
                var str2 = `${data.end}:00:00`;
                
                str1 =  str1.split(':');
                str2 =  str2.split(':');
                
              let  totalSeconds1 = parseInt(str1[0] * 3600 + str1[1] * 60 + str1[0]);
              let  totalSeconds2 = parseInt(str2[0] * 3600 + str2[1] * 60 + str2[0]);
                
                // compare them
                
                if (totalSeconds1 > totalSeconds2 ) { // etc...
                        return false;  
                }
        }
}


export default function validateTimeAndAll(inputs,allData,userLoggedIn){
           let result = {}
        
   /*
    allData = [{
  day: 40,
  reserved: [{ start: "08:00", end: "12:00", name: "den" ,day: 40},
  { start: "02:00", end: "08:00", name: "den" ,day: 40},
  { start: "15:00", end: "18:00", name: "andrew" ,day: 40},
  { start: "18:00", end: "20:00", name: "abdul",day: 40 }]
}

*/
          // basicCompare.morOrLess(inputs)
   
        








        //console.log(allData)
       return "working"
}