/* *************************************************************
|
|
|                      Main JS file
|
|       * Main page router page.
|        * Two way routring here. Main page/ App page
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import MainPage from './main';
import MainApp from './pages/mainApp';
import {CalendarContext} from './mainContext';
import {CalendarNameContext} from './mainContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//  <Router  basename={process.env.PUBLIC_URL}>
// <Route   exact path="/main" component={MainApp} />

const IndexPage = () => {
  const [ calendar_id, setCalendar] = useState(false);
  const value = { calendar_id, setCalendar };
  const [ calendarName, setCalendarName] = useState(false);
  const value1 = { calendarName, setCalendarName };


  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <CalendarNameContext.Provider value={value1}>
          <CalendarContext.Provider value={value}>
            <Route path="/dashboard" component={MainApp} />
          </CalendarContext.Provider>
          </CalendarNameContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default IndexPage;

if (document.getElementById('app')) {
  ReactDOM.render(<IndexPage />, document.getElementById('app'))
}
