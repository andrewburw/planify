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
    nowMonthNumber: function () {
        let thisMonth = new Date();

        return thisMonth.getMonth() + 1;
    },
    renderMonth: function (month) {

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
    generateMonthName: function (number) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];



        return monthNames[number - 1]
    },
    genWeekOfMonth: function(month,day){
            let weekNum = 0; // we start at week 0
    
            let weekDay = new Date('2021', month - 1, day).getDay(); // we get the weekDay of day 1
            weekDay = weekDay === 0 ? 6 : weekDay-1; // we recalculate the weekDay (Mon:0, Tue:1, Wed:2, Thu:3, Fri:4, Sat:5, Sun:6)
        
            let monday = 1+(7-weekDay); // we get the first monday of the month
        
            while(monday <= day) { //we calculate in wich week is our day
                weekNum++;
                monday += 7;
            }
                       
          return weekNum; //we return it
    },
    convertDayOfyear: function(day){
        let thisMonth = new Date();
        var date = new Date(thisMonth.getFullYear(), 0); // initialize a date in `year-01-01`
        return new Date(date.setDate(day)); // add the number of days
    },
    generateWeek: function ( day) {

         
            //console.log(this.convertDayOfyear(day))
            let dateWorkWith = this.convertDayOfyear(day);
            let day1 =  dateWorkWith.getDate()
            let month = dateWorkWith.getMonth();
        let week = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
        }
        let thisMonth = new Date();
        let weekDay = new Date(thisMonth.getFullYear(), month , day1 );
        let hManyDays = new Date(thisMonth.getFullYear(), month +1  , 0).getDate(); // number of days in month
        let weekDayEurope = !weekDay.getDay() ? 7 : weekDay.getDay();
        let privMonth =  thisMonth.getMonth()
        let test = day1  - weekDayEurope  // day1 = date of day
       //   console.log('week'+weekDayEurope)
       // console.log('week'+weekDayEurope)
        for (let i = 1; i <= 7; i++) {
         //   console.log('day'+ day1 + 'week'+weekDayEurope)
     
           //     console.log(test)
               if (test < 0 ) {
              
              //     test = 1
               
                   test++
                   week[i] = test;
              // } else if(test > hManyDays){
              //  test =0
              //  test++
              //  week[i] = test;

               } else {
                   test++
                week[i] = test;
               
               }
            
        }
  ///      console.log(week)
        let res = {
             month: this.generateMonthName(month+1),
             week: this.genWeekOfMonth(month+1,day1 )
             }
        let result = { ...week, ...res }
        return result;
    }
}


export default run;