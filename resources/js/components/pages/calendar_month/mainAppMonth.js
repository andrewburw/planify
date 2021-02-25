import nowMonthNumber,{generateMonthName,renderMonth,today} from './../../custom_modules/generateMonthCalendar';
import React, { useState, useEffect ,useContext} from 'react';
import {Link,Redirect} from "react-router-dom";
import {CalendarContext } from "../../mainContext";

/* *************************************************************
|
|
|                     Month calendar file
|
|       *  Month calendar main file.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
const MainApp = () => {

  const [month, setMonth] = useState(0);
  const {calendar_id} = useContext(CalendarContext); // calendar id (global context)

  useEffect(() => {
  
    if (month === 0) {
      setMonth(nowMonthNumber())
    }
  });
  if ( calendar_id === false) { // if page refresh pressed and id not recived
    return <Redirect to='/dashboard'></Redirect>;
   }

  return (<div>
    <div className="main_co__month-name">

      <h1> <span onClick={() => setMonth(month - 1)} className="main_co__month-left"> &#10092; </span>

        {generateMonthName(month)} <span onClick={() => setMonth(month + 1)} className="main_co__month-right"> &#10093; </span></h1>

    </div>
    <div className="calendar_app">
      <div className="calendar_container">
        <div className="calendar__weekday-name">MON</div>
        <div className="calendar__weekday-name">TUE</div>
        <div className="calendar__weekday-name">WED  </div>
        <div className="calendar__weekday-name">THU</div>
        <div className="calendar__weekday-name">FRI</div>
        <div className="calendar__weekday-name">SAT</div>
        <div className="calendar__weekday-name">SUN</div>

        {renderMonth(month).map((item, i) => {
          return   <Link to={{ pathname: '/dashboard/week', state: { month: month,day1: item.val} }} key={i} >  
          
          <div className={`${item.class} ${today(month,item.val) ? ' today' : ''}`}>
            {item.val}</div></Link>
        })}


      </div>


    </div>
  </div>
  );
}

export default MainApp;