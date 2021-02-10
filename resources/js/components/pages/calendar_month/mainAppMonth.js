import generateCalendar from './../../custom_modules/generateMonthCalendar';
import React from 'react';
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
const  MainApp = () => {
  //console.log(generateCalendat)

    return (<div>
      <div className="main_co__month-name">
        
          <h1> <span className="main_co__month-left"> &#10092; </span> September <span className="main_co__month-right"> &#10093; </span></h1>
      
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

       {generateCalendar.renderMonth().map((item,i)=>{
         
        return <div key={i} className={item.class}>{item.val}</div>
       })}
        
       
      </div>
      

      </div>
    </div>
    );
}

export default MainApp ;