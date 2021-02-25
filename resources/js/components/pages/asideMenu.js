import useFetch from './../hooks/useFetch';
import React, { useEffect, useContext } from 'react';
import { CalendarContext } from "../mainContext";
import { CalendarNameContext } from "../mainContext";
import Loading from './../../components/custom_modules/loading.svg'
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";
/* *************************************************************
|
|
|                      Aside JS file
|
|       * Aside menu component.
|      
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
const AsideMenu = () => {
  const { response, runFetch, error } = useFetch();
  const { language, setCalendar } = useContext(CalendarContext);
  const { language1, setCalendarName } = useContext(CalendarNameContext);


  useEffect(() => {
    runFetch('/api/usercalendars', 'get');


  }, []);

  const setContextCalendarId = (e) => {
    // set context for calendar id / calendar name
  
    setCalendar(e.target.dataset.id); 
    setCalendarName(e.target.dataset.name);

  }
// <Link to="/dashboard/month"> <li className="leftmenu_p-list-item">Test [Month]</li></Link>
// <Link to="/dashboard/week"> <li className="leftmenu_p-list-item">Test [week]</li></Link>

  return (
    <div className="leftmenu">
      <div className="left_menu-container">
        <div className="leftmenu__logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="leftmenu__pages">
          <div className="leftmenu__pages-con">
            <h4 className="leftmenu_p-header">Pages</h4>
            <ul className="leftmenu_p-list">
              <Link to="/dashboard"><li className="leftmenu_p-list-item"><i className="fas fa-home icon"></i>Main</li></Link>
              <li className="leftmenu_p-list-item"><i className="fas fa-table icon"></i>Calendar</li>
              <Link to="/dashboard/gant"><li className="leftmenu_p-list-item"><i className="fas fa-table icon"> Cl [gant]</i></li></Link>
            </ul>
          </div>
        </div>
        <div className="leftmenu__pages">
          <div className="leftmenu__pages-con">
            <h4 className="leftmenu_p-header">Calendars</h4>
            <ul className="leftmenu_p-list">

              {response !== 'null' ? response.map((item, i) => {
                return <Link to="/dashboard/month" key={i}> <li data-id={item.id} data-name={item.calendar_name} onClick={setContextCalendarId} className="leftmenu_p-list-item">{item.calendar_name}</li></Link>
              }) :  <img src={Loading} alt="Planify loading" />}

              <br />
           
             
            </ul>
          </div>
        </div>
        <div className="leftmenu__pages">
          <div className="leftmenu__pages-con">
            <h4 className="leftmenu_p-header">Users</h4>
            <ul className="leftmenu_p-list">
              <li className="leftmenu_p-list-item">User 1</li>
              <li className="leftmenu_p-list-item">User 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideMenu;