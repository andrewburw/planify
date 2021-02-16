/* *************************************************************
|
|
|                     Month calendar generator file
|
|       *  This is custom module for working with week calendar.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

export default function nowMonthNumber() {
    const now = new Date();

    return now.getMonth() + 1;
}

/*************************************************************** */
/*************************************************************** */
export function today(month, day) {
    // today yes no ? (return true false)
    const now = new Date();
    let recived = new Date(now.getFullYear(), month - 1, day);

    return now.toDateString() === recived.toDateString();
}

/*************************************************************** */
/*************************************************************** */
export function renderMonth(month) {

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
                    result.push({ class: "calendar__weekday calendar__weekday-hidden", val: null }) // push => object div atributes
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
}

/*************************************************************** */
/*************************************************************** */

export function generateMonthName(number) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[number - 1]
}

/*************************************************************** */
/*************************************************************** */

export function genWeekOfMonth(month, day) {
    let weekNum = 0; // we start at week 0

    let weekDay = new Date('2021', month - 1, day).getDay(); // we get the weekDay of day 1
    weekDay = weekDay === 0 ? 6 : weekDay - 1; // we recalculate the weekDay (Mon:0, Tue:1, Wed:2, Thu:3, Fri:4, Sat:5, Sun:6)

    let monday = 1 + (7 - weekDay); // we get the first monday of the month

    while (monday <= day) { //we calculate in wich week is our day
        weekNum++;
        monday += 7;
    }

    return weekNum; //we return it
}

/*************************************************************** */
/*************************************************************** */

export function convertDayOfyear(day) {
    // converting day of year to date stamp
    const thisMonth = new Date();
    let date = new Date(thisMonth.getFullYear(), 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day)); // add the number of days
}

/*************************************************************** */
/*************************************************************** */

export function covertDataToDayOfYear(day, month) {
    //converting day/month -> date of year
    if (day === 0 && month === 0) { return 1 }; // protection
    if (day === undefined || month === undefined) { return 1 }; // protection

    const thisYear = new Date();
    const myDate = new Date(thisYear.getFullYear(), month - 1, day);
    const firstJan = new Date(thisYear.getFullYear(), 0, 1);
    const differenceInMillieSeconds = myDate - firstJan;

    return Math.round(differenceInMillieSeconds / (1000 * 60 * 60 * 24) + 1);
}

/*************************************************************** */
/*************************************************************** */

export function generateWeek(day) {

    if (day <= 0) {
        day = 1  // not count day less 2021
    }


    let dateWorkWith = convertDayOfyear(day); // convert day of the year to day of month
    let day1 = dateWorkWith.getDate();
    let month = dateWorkWith.getMonth();

    let week = { //the monthday corresponds to the day of the week
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
    }



    const thisMonth = new Date();
    let weekDay = new Date(thisMonth.getFullYear(), month, day1);
    let hManyDays = new Date(thisMonth.getFullYear(), month, 0).getDate(); // number of days in priv month
    let weekDayEurope = !weekDay.getDay() ? 7 : weekDay.getDay();
    let hManyDays2 = new Date(thisMonth.getFullYear(), month + 1, 0).getDate(); // number of days in this month
    let dayOfweek = day1 - weekDayEurope  // day1 = date of day

    for (let i = 1; i <= 7; i++) {

        if (dayOfweek < 0) {


            let test = hManyDays - (dayOfweek + 7)
            if (test === hManyDays) {
                dayOfweek = 1
            }

            week[i] = test;
            dayOfweek--

        } else {
            if (dayOfweek === hManyDays2) {
                dayOfweek = 0
            }
            dayOfweek++
            week[i] = dayOfweek;

        }

    }
    // This part generates today

    let weekisToday = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false, // if one of those is true (this is week with today)
        6: false,
        7: false,
    }
    for (let i = 1; i <= 7; i++) {
        if (today(month + 1, week[i])) {
            weekisToday[i] = true;
        }


    }


    //respond

    let res = {
        month: generateMonthName(month + 1),
        monthNum: month,
        week: genWeekOfMonth(month + 1, day1),
        today: weekisToday
    }
    let result = { ...week, ...res }
    return result;
}
/*************************************************************** */
/*************************************************************** */

export function genrateDayM(data) {
   
    // foundDay = number of day

    /*Recived data:
    data = [
      false,
      (4) [{…}, {…}, {…}, {…}], // recived data -> [{start:"08:00",end:"12:00",name:"den"}, ... ]
       false,
       false,
       false,
       false,
       false
    ]
    
    
    Output data (resultAll):
    data = [
      false,
      (4) [{…}, {…}, {…}, {…}], // generated objects with div attributes
       false,                  // if false value : renders Component <ClearDay /> 
       false,
       false,
       false,
       false
    ]
    
    */
  
    let resultAll = [];

    for (let a = 0; a <= data.length - 1; a++) {

        if (data[a] === false) {

            resultAll.push(false);

        } else {
        /*  
           this part generates div attributes EXAMPLE:

            <div className='weekday1_main0 cell__bg_color'>
              <div className='weekday1_main0_inner selected_1'>
                <span className="selected__user-name">Andrew</span>
              </div>
            </div> 

        */
              

            let result = [];
            let elementWorkwith = false;
            let start = undefined; // if set to false -> second "else if" triggered
            let end = false;
            let color = 0; // 1,2 or 3
            let elementWorkwithSAVE = false; // this needed for not overwrite elementWorkwith when loop runed.
                                             // used in result.push->time

            for (let i = 0; i <= 23; i++) { // i === time form 0:00 to 23:00


                elementWorkwith = data[a].find(elm => Number(elm.start.split(":")[0]) === i) || false;

                if (elementWorkwith) {
                    elementWorkwithSAVE = elementWorkwith
                    color++;
                    if (color === 3) { color = 1 }; // only 3 colors avilible

                    start = Number(elementWorkwith.start.split(":")[0]);
                    end = Number(elementWorkwith.end.split(":")[0]);

                }
                
                if (i === start) {

                    result.push({ class1: `weekday${a+1}_main${i} cell__bg_color`,  // heading cell
                                  class2: `weekday${a+1}_main${i}_inner selected_${color}`, 
                                  spanclass: `selected__user-name`, 
                                  spandata: elementWorkwith.name,
                                  userName:  elementWorkwithSAVE.name,
                                  time: elementWorkwithSAVE.start + '-'+ elementWorkwithSAVE.end+'-'+elementWorkwithSAVE.day}) 

                } else if (i === start + 1) {

                    result.push({ class1: `weekday${a+1}_main${i} cell__bg_color`, // timing cell
                                  class2: `weekday${a+1}_main${i}_inner selected_${color}`, 
                                  spanclass: `selected__user-time`, 
                                  spandata: start + ':00' + ' - ' + end + ':00',
                                  userName:  elementWorkwithSAVE.name,
                                  time: elementWorkwithSAVE.start + '-'+ elementWorkwithSAVE.end+'-'+elementWorkwithSAVE.day}) 

                } else if (i > start + 1 && i < end) {

                    result.push({ class1: `weekday${a+1}_main${i} cell__bg_color`, // colorized cell
                                  class2: `weekday${a+1}_main${i}_inner selected_${color}`, 
                                  spanclass: null, 
                                  spandata: null ,
                                  userName:  elementWorkwithSAVE.name,
                                  time: elementWorkwithSAVE.start + '-'+ elementWorkwithSAVE.end+'-'+elementWorkwithSAVE.day}) 

                } else {
                    elementWorkwithSAVE = false;    

                    result.push({ class1: `weekday${a+1}_main${i} cell__bg_color`, // clear cell
                                  class2: `weekday${a+1}_main${i}_inner`, 
                                  spanclass: null, 
                                  spandata: null, 
                                  userName: null}) 

                }

            }
            resultAll.push(result);
        }


    }

    return resultAll;
}
/*************************************************************** */
/*************************************************************** */

/*
|               data variable:
let testData = [{
  day:33,
  reserved:[{start:"08:00",end:"12:00",name:"den"},
  {start:"13:00",end:"15:00",name:"den"},
  {start:"15:00",end:"18:00",name:"andrew"},
  {start:"18:00",end:"20:00",name:"abdul"}]
}] 

|               weekDays variable              
 week days  : {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, month: "February", week: 0, today: {…}}
*/

export function genrateWeekAll(data, weekDays) {
  // renders "week calendar" -> all week days
    let result = [];
  


    for (const key in weekDays) {

        if (key === 'month') {
            break;
        }

        let check = data.find(elm => elm.day === covertDataToDayOfYear(weekDays[key], weekDays.monthNum + 1)) || false

        if (check) {
                 /*
            for (const key in check.reserved) { // adding to each scheldue day value

                check.reserved[key]['day'] = check.day;

            } */
            result.push(check.reserved);
                      
        } else {
            result.push(false);
        }

    }

      
    return genrateDayM(result);
}