
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Aside from './asideMenu';
import Header from './header';
import MonthMainApp from './calendar_month/mainAppMonth';
import WeekMainApp from './calendar_week/mainAppWeek';
import WeekMainGant from './calendar_gant/mainAppGant';
import DashBoard from './dash_board/dashBoard';

/* *************************************************************
|
|
|                     Main APP constructor component
|
|     
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/




const MainApp = () => {
 


  return (
    <div className="grid-container">
       <Header />
     
      <Aside />
      <div className="main_co">
        <div className="container">


          <Switch>
            <Route exact path="/dashboard" component={DashBoard} />
            <Route path="/dashboard/month" component={MonthMainApp} />
            <Route path="/dashboard/week" component={WeekMainApp} />
            <Route path="/dashboard/gant" component={WeekMainGant} />
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default MainApp;