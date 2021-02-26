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

        morOrLess: function (data) {
                var str1 = `${data.start}:00:00`;
                var str2 = `${data.end}:00:00`;

                str1 = str1.split(':');
                str2 = str2.split(':');

                let totalSeconds1 = parseInt(str1[0] * 3600 + str1[1] * 60 + str1[0]);
                let totalSeconds2 = parseInt(str2[0] * 3600 + str2[1] * 60 + str2[0]);

                // compare them

                if (totalSeconds1 >= totalSeconds2) { // etc...
                        return true;
                }

                return false;
        }
}
/* ************************************************************************* */
/*
      allData = [{
    day: 40,
    reserved: [{ start: "08:00", end: "12:00", name: "den" ,day: 40},
    { start: "02:00", end: "08:00", name: "den" ,day: 40},
    { start: "15:00", end: "18:00", name: "andrew" ,day: 40},
    { start: "18:00", end: "20:00", name: "abdul",day: 40 }]
  }
  
  */
export default function validateTimeAndAll(inputs, allData, userLoggedIn) {

        // inputs { start: "08:00", end: "12:00",day: 40}
        
        if (basicCompare.morOrLess(inputs)) {
                // if basic test not pased return error
                return { error: "End can't be less then start or equal", status: true };
        }
    
        if (allData === null) {
                // little crutch :) : if this validation function (this) is triggered on emty day ->
                //    and basicCompare has no errors return no errors
                return { status: false };
        } 
         
        if (allData.find(x => x.day == Number(inputs.day)) === undefined) {
                  // little crutch :) : if this validation function (this) is triggered on emty day ->
                  //    and basicCompare has no errors return no errors
                  return { status: false };
        } 
  
     
   
        let selected = {
                start: Number(inputs.start.split(":")[0]),
                end: Number(inputs.end.split(":")[0])
        };

        let dataOfday = allData.find(x => Number(x.day) == Number(inputs.day)).reserved; // find day-data work with
      //  let filtredData = dataOfday.filter(x => x.name !== userLoggedIn); // "delete" logged in user data



        


        let dataInNumbers = []; // converted all data (start/end) to numbers

       

        dataOfday.forEach((item) => {
                // convert all data (start/end) to numbers
                dataInNumbers.push({
                        start: Number(item.start.split(":")[0]),
                        end: Number(item.end.split(":")[0])
                })
        });




        const overlaps = dataInNumbers.some(range => // Main algorythm detects if selected data is in busy range
                (range.start < selected.start && range.end > selected.start) ||
                (range.start < selected.end && range.end >= selected.end) ||
                (range.start > selected.start && range.end < selected.end)
        );



        return overlaps ? { error: "This time is busy!", status: true } : { status: false };
}