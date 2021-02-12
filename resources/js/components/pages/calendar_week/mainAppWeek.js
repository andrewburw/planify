import {generateWeek,covertDataToDayOfYear,genrateWeekAll} from './../../custom_modules/generateMonthCalendar';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
/* *************************************************************
|
|
|                     Month calendar file
|
|       *  Week calendar main file.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
let testData = [{
  day:33,
  reserved:[{start:"08:00",end:"12:00",name:"den"},
  {start:"02:00",end:"08:00",name:"den"},
  {start:"15:00",end:"18:00",name:"andrew"},
  {start:"18:00",end:"20:00",name:"abdul"}]
}] 
const  WeekCalendar = (props) => {

  const [day, setDay] = useState(1); // day of year (dafault set to 1 (janvary 1th))
  let generate = generateWeek(day); // returned object with weekDay:monthDay
  let generateDay = genrateWeekAll(testData,generate);

  useEffect(() => {
    const {month,day1} = props.location.state || {month: 0,day:0};
   
   if (day < day1) { // protect (without this protection not working PREV NEXT)
  
    setDay(covertDataToDayOfYear(day1,month)); // day,month
   }
   
   
  });
   
 


  //console.log(generateDay)

    return (<div>
        <Link to="/dashboard/month"><button className="btn-sm white-btn">&#10092; Back</button></Link> 
      <div className="main_co__month-name">
        
        
      <h1> <span onClick={() => setDay(day - 7)} className="main_co__month-left"> &#10092; </span>

        {generate.month} - Week {generate.week}<span onClick={() => setDay(day + 7)} className="main_co__month-right"> &#10093; </span></h1>      
  </div> 
        <div className="cal_w_app">
        <div className="grid-container3">
          <div className="empty"></div>
      
            <div className={`weekday1 ${generate.today[1]? 'today': ''}`}>
              <h1 className="week__day_h">MON</h1>
              <p className="week__day_p">{generate['1']}</p>
            </div>
            <div className={`weekday2 ${generate.today[2]? 'today': ''}`}> 
              <h1 className="week__day_h">TUE</h1>
              <p className="week__day_p">{generate['2']}</p>
            
            </div>
            <div className={`weekday3 ${generate.today[3]? 'today': ''}`}>
               <h1 className="week__day_h ">WED</h1>
              <p className="week__day_p">{generate['3']}</p>
            </div>
            <div className={`weekday4 ${generate.today[4]? 'today': ''}`}>
               <h1 className="week__day_h">THU</h1>
              <p className="week__day_p">{generate['4']}</p>
            </div>
            <div className={`weekday5 ${generate.today[5]? 'today': ''}`}> 
              <h1 className="week__day_h">FRI</h1>
              <p className="week__day_p">{generate['5']}</p>
            </div>
            <div className={`weekday6 ${generate.today[6]? 'today': ''}`}>
               <h1 className="week__day_h">SAT</h1>
              <p className="week__day_p">{generate['6']}</p>
            </div>
            <div className={`weekday7 ${generate.today[7]? 'today': ''}`}>
               <h1 className="week__day_h">SUN</h1>
              <p className="week__day_p">{generate['7']}</p>
            </div>
            
            <div className="menu0"><p className="menu__p ">00:00</p></div>
            <div className="menu1"><p className="menu__p ">01:00</p></div>
            <div className="menu2"><p className="menu__p ">02:00</p></div>
            <div className="menu3"><p className="menu__p ">03:00</p></div>
            <div className="menu4"><p className="menu__p ">04:00</p></div>
            <div className="menu5"><p className="menu__p ">05:00</p></div>
            <div className="menu6"><p className="menu__p ">06:00</p></div>
            <div className="menu7"><p className="menu__p ">07:00</p></div>
            <div className="menu8"><p className="menu__p ">08:00</p></div>
            <div className="menu9"><p className="menu__p ">09:00</p></div>
            <div className="menu10"><p className="menu__p ">10:00</p></div>
            <div className="menu11"><p className="menu__p ">11:00</p></div>
            <div className="menu12"><p className="menu__p ">12:00</p></div>
            <div className="menu13"><p className="menu__p ">13:00</p></div>
            <div className="menu14"><p className="menu__p ">14:00</p></div>
            <div className="menu15"><p className="menu__p ">15:00</p></div>
            <div className="menu16"><p className="menu__p ">16:00</p></div>
            <div className="menu17"><p className="menu__p ">17:00</p></div>
            <div className="menu18"><p className="menu__p ">18:00</p></div>
            <div className="menu19"><p className="menu__p ">19:00</p></div>
            <div className="menu20"><p className="menu__p ">20:00</p></div>
            <div className="menu21"><p className="menu__p ">21:00</p></div>
            <div className="menu22"><p className="menu__p ">22:00</p></div>
            <div className="menu23"><p className="menu__p ">23:00</p></div>
           
           
           
            <div className='weekday1_main0 cell__bg_color'><div className='weekday1_main0_inner selected_1'><span className="selected__user-name">Andrew</span></div></div>
            <div className='weekday1_main1 cell__bg_color'><div className='weekday1_main1_inner selected_1'><span className="selected__user-time">00:00 - 12:00</span></div></div>
            <div className='weekday1_main2 cell__bg_color'><div className='weekday1_main2_inner selected_1'></div></div>
            <div className='weekday1_main3 cell__bg_color'><div className='weekday1_main3_inner selected_1'></div></div>
            <div className='weekday1_main4 cell__bg_color'><div className='weekday1_main4_inner selected_1'></div></div>
            <div className='weekday1_main5 cell__bg_color'><div className='weekday1_main5_inner selected_1'></div></div>
            <div className='weekday1_main6 cell__bg_color'><div className='weekday1_main6_inner selected_1'></div></div>
            <div className='weekday1_main7 cell__bg_color'><div className='weekday1_main7_inner selected_1'></div></div>
            <div className='weekday1_main8 cell__bg_color'><div className='weekday1_main8_inner selected_1'></div></div>
            <div className='weekday1_main9 cell__bg_color'><div className='weekday1_main9_inner selected_1'></div></div>
            <div className='weekday1_main10 cell__bg_color'><div className='weekday1_main10_inner selected_1'></div></div>
            <div className='weekday1_main11 cell__bg_color'><div className='weekday1_main11_inner selected_2'><span className="selected__user-name"> Band 1</span></div></div>
            <div className='weekday1_main12 cell__bg_color'><div className='weekday1_main12_inner selected_2'><span className="selected__user-time">00:00 - 12:00</span></div></div>
            <div className='weekday1_main13 cell__bg_color'><div className='weekday1_main13_inner selected_2'></div></div>
            <div className='weekday1_main14 cell__bg_color'><div className='weekday1_main14_inner selected_2'></div></div>
            <div className='weekday1_main15 cell__bg_color'><div className='weekday1_main15_inner selected_2'></div></div>
            <div className='weekday1_main16 cell__bg_color'><div className='weekday1_main16_inner selected_3'><span className="selected__user-name">User 2</span></div></div>
            <div className='weekday1_main17 cell__bg_color'><div className='weekday1_main17_inner selected_3'><span className="selected__user-time">00:00 - 12:00</span></div></div>
            <div className='weekday1_main18 cell__bg_color'><div className='weekday1_main18_inner selected_3'></div></div>
            <div className='weekday1_main19 cell__bg_color'><div className='weekday1_main19_inner selected_3'></div></div>
            <div className='weekday1_main20 cell__bg_color'><div className='weekday1_main20_inner selected_3'></div></div>
            <div className='weekday1_main21 cell__bg_color'><div className='weekday1_main21_inner selected_3'></div></div>
            <div className='weekday1_main22 cell__bg_color'><div className='weekday1_main22_inner selected_3'></div></div>
            <div className='weekday1_main23 cell__bg_color'><div className='weekday1_main23_inner selected_3'></div></div>
          
            {generateDay.map((item,i)=>{

              return  <div key={i} className={item.class1}>
                <div className={item.class2}>
                
                {item.spanclass !==null? <span className={item.spanclass}>{item.spandata}</span>:''}
                
                
                </div></div>
            })}
  
  
  <div className='weekday3_main0 cell__bg_color'><div className='weekday3_main0_inner'></div></div>
  <div className='weekday3_main1 cell__bg_color'><div className='weekday3_main1_inner'></div></div>
  <div className='weekday3_main2 cell__bg_color'><div className='weekday3_main2_inner'></div></div>
  <div className='weekday3_main3 cell__bg_color'><div className='weekday3_main3_inner'></div></div>
  <div className='weekday3_main4 cell__bg_color'><div className='weekday3_main4_inner'></div></div>
  <div className='weekday3_main5 cell__bg_color'><div className='weekday3_main5_inner'></div></div>
  <div className='weekday3_main6 cell__bg_color'><div className='weekday3_main6_inner'></div></div>
  <div className='weekday3_main7 cell__bg_color'><div className='weekday3_main7_inner'></div></div>
  <div className='weekday3_main8 cell__bg_color'><div className='weekday3_main8_inner'></div></div>
  <div className='weekday3_main9 cell__bg_color'><div className='weekday3_main9_inner'></div></div>
  <div className='weekday3_main10 cell__bg_color'><div className='weekday3_main10_inner'></div></div>
  <div className='weekday3_main11 cell__bg_color'><div className='weekday3_main11_inner'></div></div>
  <div className='weekday3_main12 cell__bg_color'><div className='weekday3_main12_inner'></div></div>
  <div className='weekday3_main13 cell__bg_color'><div className='weekday3_main13_inner'></div></div>
  <div className='weekday3_main14 cell__bg_color'><div className='weekday3_main14_inner'></div></div>
  <div className='weekday3_main15 cell__bg_color'><div className='weekday3_main15_inner'></div></div>
  <div className='weekday3_main16 cell__bg_color'><div className='weekday3_main16_inner'></div></div>
  <div className='weekday3_main17 cell__bg_color'><div className='weekday3_main17_inner'></div></div>
  <div className='weekday3_main18 cell__bg_color'><div className='weekday3_main18_inner'></div></div>
  <div className='weekday3_main19 cell__bg_color'><div className='weekday3_main19_inner'></div></div>
  <div className='weekday3_main20 cell__bg_color'><div className='weekday3_main20_inner'></div></div>
  <div className='weekday3_main21 cell__bg_color'><div className='weekday3_main21_inner'></div></div>
  <div className='weekday3_main22 cell__bg_color'><div className='weekday3_main22_inner'></div></div>
  <div className='weekday3_main23 cell__bg_color'><div className='weekday3_main23_inner'></div></div>
  
  
  <div className='weekday4_main0 cell__bg_color'><div className='weekday4_main0_inner'></div></div>
  <div className='weekday4_main1 cell__bg_color'><div className='weekday4_main1_inner'></div></div>
  <div className='weekday4_main2 cell__bg_color'><div className='weekday4_main2_inner'></div></div>
  <div className='weekday4_main3 cell__bg_color'><div className='weekday4_main3_inner'></div></div>
  <div className='weekday4_main4 cell__bg_color'><div className='weekday4_main4_inner'></div></div>
  <div className='weekday4_main5 cell__bg_color'><div className='weekday4_main5_inner'></div></div>
  <div className='weekday4_main6 cell__bg_color'><div className='weekday4_main6_inner'></div></div>
  <div className='weekday4_main7 cell__bg_color'><div className='weekday4_main7_inner'></div></div>
  <div className='weekday4_main8 cell__bg_color'><div className='weekday4_main8_inner'></div></div>
  <div className='weekday4_main9 cell__bg_color'><div className='weekday4_main9_inner selected_3'><span className="selected__user-name"> User 1</span></div></div>
  <div className='weekday4_main10 cell__bg_color'><div className='weekday4_main10_inner selected_3'><span className="selected__user-time">00:00 - 12:00</span></div></div>
  <div className='weekday4_main11 cell__bg_color'><div className='weekday4_main11_inner selected_3'></div></div>
  <div className='weekday4_main12 cell__bg_color'><div className='weekday4_main12_inner selected_3'></div></div>
  <div className='weekday4_main13 cell__bg_color'><div className='weekday4_main13_inner selected_3'></div></div>
  <div className='weekday4_main14 cell__bg_color'><div className='weekday4_main14_inner selected_3'></div></div>
  <div className='weekday4_main15 cell__bg_color'><div className='weekday4_main15_inner selected_3'></div></div>
  <div className='weekday4_main16 cell__bg_color'><div className='weekday4_main16_inner selected_1'><span className="selected__user-name">Andrew</span></div></div>
  <div className='weekday4_main17 cell__bg_color'><div className='weekday4_main17_inner selected_1'><span className="selected__user-time">00:00 - 12:00</span></div></div>
  <div className='weekday4_main18 cell__bg_color'><div className='weekday4_main18_inner selected_1'></div></div>
  <div className='weekday4_main19 cell__bg_color'><div className='weekday4_main19_inner selected_1'></div></div>
  <div className='weekday4_main20 cell__bg_color'><div className='weekday4_main20_inner selected_1'></div></div>
  <div className='weekday4_main21 cell__bg_color'><div className='weekday4_main21_inner selected_1'></div></div>
  <div className='weekday4_main22 cell__bg_color'><div className='weekday4_main22_inner selected_1'></div></div>
  <div className='weekday4_main23 cell__bg_color'><div className='weekday4_main23_inner selected_1'></div></div>
  
  
  <div className='weekday5_main0 cell__bg_color'><div className='weekday5_main0_inner'></div></div>
  <div className='weekday5_main1 cell__bg_color'><div className='weekday5_main1_inner'></div></div>
  <div className='weekday5_main2 cell__bg_color'><div className='weekday5_main2_inner'></div></div>
  <div className='weekday5_main3 cell__bg_color'><div className='weekday5_main3_inner'></div></div>
  <div className='weekday5_main4 cell__bg_color'><div className='weekday5_main4_inner'></div></div>
  <div className='weekday5_main5 cell__bg_color'><div className='weekday5_main5_inner'></div></div>
  <div className='weekday5_main6 cell__bg_color'><div className='weekday5_main6_inner'></div></div>
  <div className='weekday5_main7 cell__bg_color'><div className='weekday5_main7_inner'></div></div>
  <div className='weekday5_main8 cell__bg_color'><div className='weekday5_main8_inner'></div></div>
  <div className='weekday5_main9 cell__bg_color'><div className='weekday5_main9_inner'></div></div>
  <div className='weekday5_main10 cell__bg_color'><div className='weekday5_main10_inner'></div></div>
  <div className='weekday5_main11 cell__bg_color'><div className='weekday5_main11_inner'></div></div>
  <div className='weekday5_main12 cell__bg_color'><div className='weekday5_main12_inner'></div></div>
  <div className='weekday5_main13 cell__bg_color'><div className='weekday5_main13_inner'></div></div>
  <div className='weekday5_main14 cell__bg_color'><div className='weekday5_main14_inner'></div></div>
  <div className='weekday5_main15 cell__bg_color'><div className='weekday5_main15_inner'></div></div>
  <div className='weekday5_main16 cell__bg_color'><div className='weekday5_main16_inner'></div></div>
  <div className='weekday5_main17 cell__bg_color'><div className='weekday5_main17_inner'></div></div>
  <div className='weekday5_main18 cell__bg_color'><div className='weekday5_main18_inner'></div></div>
  <div className='weekday5_main19 cell__bg_color'><div className='weekday5_main19_inner'></div></div>
  <div className='weekday5_main20 cell__bg_color'><div className='weekday5_main20_inner'></div></div>
  <div className='weekday5_main21 cell__bg_color'><div className='weekday5_main21_inner'></div></div>
  <div className='weekday5_main22 cell__bg_color'><div className='weekday5_main22_inner'></div></div>
  <div className='weekday5_main23 cell__bg_color'><div className='weekday5_main23_inner'></div></div>
  
  
  <div className='weekday6_main0 cell__bg_color'><div className='weekday6_main0_inner selected_1'><span className="selected__user-name">Den</span></div></div>
  <div className='weekday6_main1 cell__bg_color'><div className='weekday6_main1_inner selected_1'><span className="selected__user-time">00:00 - 12:00</span></div></div>
  <div className='weekday6_main2 cell__bg_color'><div className='weekday6_main2_inner selected_1'></div></div>
  <div className='weekday6_main3 cell__bg_color'><div className='weekday6_main3_inner selected_1'></div></div>
  <div className='weekday6_main4 cell__bg_color'><div className='weekday6_main4_inner selected_1'></div></div>
  <div className='weekday6_main5 cell__bg_color'><div className='weekday6_main5_inner selected_1'></div></div>
  <div className='weekday6_main6 cell__bg_color'><div className='weekday6_main6_inner selected_1'></div></div>
  <div className='weekday6_main7 cell__bg_color'><div className='weekday6_main7_inner selected_1'></div></div>
  <div className='weekday6_main8 cell__bg_color'><div className='weekday6_main8_inner selected_2'><span className="selected__user-name"> User 1</span></div></div>
  <div className='weekday6_main9 cell__bg_color'><div className='weekday6_main9_inner selected_2'><span className="selected__user-time">00:00 - 12:00</span></div></div>
  <div className='weekday6_main10 cell__bg_color'><div className='weekday6_main10_inner selected_2'></div></div>
  <div className='weekday6_main11 cell__bg_color'><div className='weekday6_main11_inner selected_2'></div></div>
  <div className='weekday6_main12 cell__bg_color'><div className='weekday6_main12_inner selected_2'></div></div>
  <div className='weekday6_main13 cell__bg_color'><div className='weekday6_main13_inner selected_2'></div></div>
  <div className='weekday6_main14 cell__bg_color'><div className='weekday6_main14_inner selected_2'></div></div>
  <div className='weekday6_main15 cell__bg_color'><div className='weekday6_main15_inner selected_3 '><span className="selected__user-name"> Band 1</span></div></div>
  <div className='weekday6_main16 cell__bg_color'><div className='weekday6_main16_inner selected_3 '><span className="selected__user-time">00:00 - 12:00</span></div></div>
  <div className='weekday6_main17 cell__bg_color'><div className='weekday6_main17_inner selected_3 '></div></div>
  <div className='weekday6_main18 cell__bg_color'><div className='weekday6_main18_inner selected_3 '></div></div>
  <div className='weekday6_main19 cell__bg_color'><div className='weekday6_main19_inner selected_3 '></div></div>
  <div className='weekday6_main20 cell__bg_color'><div className='weekday6_main20_inner selected_3 '></div></div>
  <div className='weekday6_main21 cell__bg_color'><div className='weekday6_main21_inner selected_3 '></div></div>
  <div className='weekday6_main22 cell__bg_color'><div className='weekday6_main22_inner selected_3 '></div></div>
  <div className='weekday6_main23 cell__bg_color'><div className='weekday6_main23_inner selected_3 '></div></div>
  
  <div className='weekday7_main0 cell__bg_color'><div className='weekday7_main0_inner'></div></div>
  <div className='weekday7_main1 cell__bg_color'><div className='weekday7_main1_inner'></div></div>
  <div className='weekday7_main2 cell__bg_color'><div className='weekday7_main2_inner'></div></div>
  <div className='weekday7_main3 cell__bg_color'><div className='weekday7_main3_inner'></div></div>
  <div className='weekday7_main4 cell__bg_color'><div className='weekday7_main4_inner'></div></div>
  <div className='weekday7_main5 cell__bg_color'><div className='weekday7_main5_inner'></div></div>
  <div className='weekday7_main6 cell__bg_color'><div className='weekday7_main6_inner'></div></div>
  <div className='weekday7_main7 cell__bg_color'><div className='weekday7_main7_inner'></div></div>
  <div className='weekday7_main8 cell__bg_color'><div className='weekday7_main8_inner'></div></div>
  <div className='weekday7_main9 cell__bg_color'><div className='weekday7_main9_inner'></div></div>
  <div className='weekday7_main10 cell__bg_color'><div className='weekday7_main10_inner'></div></div>
  <div className='weekday7_main11 cell__bg_color'><div className='weekday7_main11_inner'></div></div>
  <div className='weekday7_main12 cell__bg_color'><div className='weekday7_main12_inner'></div></div>
  <div className='weekday7_main13 cell__bg_color'><div className='weekday7_main13_inner'></div></div>
  <div className='weekday7_main14 cell__bg_color'><div className='weekday7_main14_inner'></div></div>
  <div className='weekday7_main15 cell__bg_color'><div className='weekday7_main15_inner'></div></div>
  <div className='weekday7_main16 cell__bg_color'><div className='weekday7_main16_inner'></div></div>
  <div className='weekday7_main17 cell__bg_color'><div className='weekday7_main17_inner'></div></div>
  <div className='weekday7_main18 cell__bg_color'><div className='weekday7_main18_inner'></div></div>
  <div className='weekday7_main19 cell__bg_color'><div className='weekday7_main19_inner'></div></div>
  <div className='weekday7_main20 cell__bg_color'><div className='weekday7_main20_inner'></div></div>
  <div className='weekday7_main21 cell__bg_color'><div className='weekday7_main21_inner'></div></div>
  <div className='weekday7_main22 cell__bg_color'><div className='weekday7_main22_inner'></div></div>
  <div className='weekday7_main23 cell__bg_color'><div className='weekday7_main23_inner'></div></div>
         
        </div>
        
        </div>
  
      </div>
    );
}

export default WeekCalendar;