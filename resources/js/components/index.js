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

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './main';
import MainApp from './pages/mainApp';
import { CalendarContext ,CalendarNameContext,
  UserContext,AvatarContext} from './mainContext';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from './protectedRoute';


const IndexPage = () => {
  const [calendar_id, setCalendar] = useState(false);
  const value = { calendar_id, setCalendar };

  const [calendarName, setCalendarName] = useState(false);
  const value1 = { calendarName, setCalendarName };

  const [user_name, setUserName] = useState(false);
  const value2 = { user_name, setUserName };

  const [avatar, setAvatar] = useState(false);
  const value3 = { avatar, setAvatar };
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <AvatarContext.Provider value={value3}>
          <CalendarNameContext.Provider value={value1}>
            <CalendarContext.Provider value={value}>
              <UserContext.Provider value={value2}>
                <ProtectedRoute path="/dashboard" component={MainApp} />
              </UserContext.Provider>
            </CalendarContext.Provider>
          </CalendarNameContext.Provider>
          </AvatarContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default IndexPage;

if (document.getElementById('app')) {
  ReactDOM.render(<IndexPage />, document.getElementById('app'))
}
