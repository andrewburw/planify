import nowMonthNumber,{generateMonthName,renderMonth,today} from './../../custom_modules/generateMonthCalendar';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
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

  useEffect(() => {
    if (month === 0) {
      setMonth(nowMonthNumber())
    }
  });


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