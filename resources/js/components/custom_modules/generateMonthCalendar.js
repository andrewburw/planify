/* *************************************************************
|
|
|                     Month calendar generator file
|
|       *  This file renderMonth functuon returns objects for mainAppMonth.js (It renders month)
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
let run = {
    nowMonthNumber: function(){
        let thisMonth = new Date();

        return  thisMonth.getMonth()+1;
    },
    renderMonth: function(month){
        
        let thisMonth = new Date();
        let date = new Date(`${thisMonth.getFullYear()}-${month}-01`).getDay() // get month first day (week day)
        let hManyDays = new Date(thisMonth.getFullYear(), month, 0).getDate(); // number of days in month
      
       
       
        let result = [];
        let dayInc = 0;

        for (let i = 0; i <= 4; i++) {

            if (dayInc === hManyDays) { break; } // in most of cases all month is 5 weeks but sometimes it's 4 (example Febrary of 2021)
         
            if (i === 0) {  // if "i" == 0  first week in month renders.

                for (let a = 1; a <= 7; a++) {
                    if (a < date) {
                        result.push({ class: "calendar__weekday calendar__weekday-hidden", val: null })
                    } else if (a >= date && a !== 7) {
                        dayInc++
                        result.push({ class: "calendar__weekday", val: dayInc });
                    } else if (a === 7) {
                        dayInc++
                        result.push({ class: "calendar__weekday-weekend", val: dayInc });
                    }
                }

            } else {

                for (let a = 1; a <= 7; a++) {
                    if (dayInc === hManyDays) { break; }
                    if (a !== 7) {
                        dayInc++
                        result.push({ class: "calendar__weekday", val: dayInc });
                    } else if (a === 7) {
                        dayInc++
                        result.push({ class: "calendar__weekday-weekend", val: dayInc });
                    }
                }
            }
        }
        return result;
    },
    generateMonthName: function(number){
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      

         return monthNames[number-1]
    }
}


export default run;