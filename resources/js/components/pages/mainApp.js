
import React, { useState } from 'react';
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
import HelpPage from './help_page/help_page';
import ProfileSettings from './settings/profile';
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

let gird = {
  // by default with aside. Here without aside.
  display: 'grid',
  height: '100vh',
  gridTemplateAreas: `
    'header header header header header'
    'main main main main main'
    'main main main main main'`,
  gridTemplateColumns: '220px',
  gridTemplateRows: '50px'

}


const MainApp = () => {
  const [aside, setAside] = useState(true);




  return (
    <div className="grid-container" style={aside ? {} : gird}>
      <Header hideShowAside={() => setAside(!aside)} />

      <Aside visible={aside} />

      <div className="main_co">
        <div className="container">


          <Switch>
            <Route exact path="/dashboard" component={DashBoard} />
            <Route path="/dashboard/month" component={MonthMainApp} />
            <Route path="/dashboard/week" component={WeekMainApp} />
            <Route path="/dashboard/gant" component={WeekMainGant} />
            <Route path="/dashboard/help" component={HelpPage } />
            <Route path="/dashboard/profile" component={ProfileSettings } />
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default MainApp;