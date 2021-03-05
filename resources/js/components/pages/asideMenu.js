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
  const  useData = useFetch();
  const  useGetUsers = useFetch();

  useEffect(() => {
    runFetch('/api/usercalendars', 'get');
   

  }, []);

  useEffect(() => {
   
    useData.runFetch('/api/showshare', 'get');

  }, []);
  const setContextCalendarId = (e) => {
    // set context for calendar id / calendar name

    useGetUsers.runFetch('/api/showshareusers', 'post', {calendar_id: e.target.dataset.id});

    setCalendar(e.target.dataset.id); 
    setCalendarName(e.target.dataset.name);

  }


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
            <h4 className="leftmenu_p-header">Shared calendars</h4>
            <ul className="leftmenu_p-list">

              {useData.response !== 'null' ? useData.response.map((item, i) => {
            
                return <Link to="/dashboard/month" key={i}> <li data-id={item.calendar_id} data-name={item.calendar_name} onClick={setContextCalendarId} className="leftmenu_p-list-item">{item.calendar_name}</li></Link>
              }) :  <img src={Loading} alt="Planify loading" />}

              <br />
           
             
            </ul>
          </div>
        </div>
        <div className="leftmenu__pages">
          <div className="leftmenu__pages-con">
            <h4 className="leftmenu_p-header">Users</h4>
            <ul className="leftmenu_p-list">
            {useGetUsers.response !== 'null' ? useGetUsers.response.map((item, i) => {
            
            return  <li key={i} className="leftmenu_p-list-item">{item.name}</li>
          }) :  ''}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideMenu;