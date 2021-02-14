import { generateWeek, covertDataToDayOfYear, genrateWeekAll } from './../../custom_modules/generateMonthCalendar';
import React, { useState, useEffect } from 'react';
import ClearDay from './blankDay';
import { Link } from "react-router-dom";
import SmallMenu from './../../modals/menuSmallCalendar';
import useModal from "./../../hooks/useModal";
import EditDeleteModal from './../../modals/menuModalAddEditShc';
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
  day: 40,
  reserved: [{ start: "08:00", end: "12:00", name: "den" },
  { start: "02:00", end: "08:00", name: "den" },
  { start: "15:00", end: "18:00", name: "andrew" },
  { start: "18:00", end: "20:00", name: "abdul" }]
}]



const WeekCalendar = (props) => {

  // RENDER CALENDAR:

  const [day, setDay] = useState(1); // day of year (dafault set to 1 (janvary 1th))
  let generate = generateWeek(day); // returned object with {weekDay:monthDay}
  let generateDay = genrateWeekAll(testData, generate);

  // SMALL MODAL MENU CONTROL:

  const [isShowingReg, toggleMenu] = useModal();
  const [position, setPosition] = useState(); // set position when and where menu triggered {x,y}
  const [smallMenu, setMenu] = useState(); // set meny: b
  
  // MODAL ADD/EDIT CONTROL:

  const [isShowingEdit, toggleEdit] = useModal();
  const [editData, setEditData] = useState();


  useEffect(() => {
    const { month, day1 } = props.location.state || { month: 0, day: 0 };

    if (day < day1) { // protect (without this protection not working PREV NEXT month)

      setDay(covertDataToDayOfYear(day1, month)); // (day,month)
    }


  });


  const showRefPosition = (e) => {
    // On click small menu
    toggleMenu();
    setEditData(e.target.dataset.datause); // -> saved data and sended to modal edit
   
    setMenu(e.target.dataset.menu); // set menu for free time or busy
    let xpos = e.target.getBoundingClientRect().x;
    let ypos = e.target.getBoundingClientRect().y;

    setPosition({ x: xpos, y: ypos });

  };


  //console.log(generateDay)

  return (<div>
        <EditDeleteModal isShowing={isShowingEdit} 
                         hide={toggleEdit} 
                         editData={editData} />

    <SmallMenu isShowing={isShowingReg} 
                hide={toggleMenu} 
                menu={smallMenu} 
                position={position} 
                showModalEdit={toggleEdit}/>


    <Link to="/dashboard/month"><button className="btn-sm white-btn">&#10092; Back</button></Link>
    <div className="main_co__month-name">


      <h1> <span onClick={() => setDay(day - 7)} className="main_co__month-left"> &#10092; </span>

        {generate.month} - Week {generate.week}<span onClick={() => setDay(day + 7)} className="main_co__month-right"> &#10093; </span></h1>
    </div>
    <div className="cal_w_app">

      <div className="grid-container3">
        <div className="empty"></div>

        <div className={`weekday1 ${generate.today[1] ? 'today' : ''}`}>
          <h1 className="week__day_h">MON</h1>
          <p className="week__day_p">{generate['1']}</p>
        </div>
        <div className={`weekday2 ${generate.today[2] ? 'today' : ''}`}>
          <h1 className="week__day_h">TUE</h1>
          <p className="week__day_p">{generate['2']}</p>

        </div>
        <div className={`weekday3 ${generate.today[3] ? 'today' : ''}`}>
          <h1 className="week__day_h ">WED</h1>
          <p className="week__day_p">{generate['3']}</p>
        </div>
        <div className={`weekday4 ${generate.today[4] ? 'today' : ''}`}>
          <h1 className="week__day_h">THU</h1>
          <p className="week__day_p">{generate['4']}</p>
        </div>
        <div className={`weekday5 ${generate.today[5] ? 'today' : ''}`}>
          <h1 className="week__day_h">FRI</h1>
          <p className="week__day_p">{generate['5']}</p>
        </div>
        <div className={`weekday6 ${generate.today[6] ? 'today' : ''}`}>
          <h1 className="week__day_h">SAT</h1>
          <p className="week__day_p">{generate['6']}</p>
        </div>
        <div className={`weekday7 ${generate.today[7] ? 'today' : ''}`}>
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
        {generateDay.map((itm, a) => {

          return itm === false ? <ClearDay clicked={showRefPosition} key={a} val={a + 1} /> :

            itm.map((item, i) => {
              //  console.log(item.time)
              return <div
                style={{ cursor: 'pointer' }}
                key={i}
                data-menu="free"
                onClick={showRefPosition}
                className={item.class1}
                data-datause="null">
              


                <div className={item.class2} data-menu="busy" data-datause={item.time} onClick={showRefPosition}>

                  {item.spanclass !== null ? <span className={item.spanclass}>{item.spandata}</span> : ''}


                </div></div>
            })

        })}




      </div>

    </div>

  </div>
  );
}

export default WeekCalendar;