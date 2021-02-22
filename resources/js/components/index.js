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

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//  <Router  basename={process.env.PUBLIC_URL}>
// <Route   exact path="/main" component={MainApp} />
export const UserContext = React.createContext({ user: 'andrew' });

export const CalendarContext = React.createContext({ // I use this context in this project only for testing new react hook
  calendar_id: null,
  setCalendar: () => {}
});


const IndexPage = () => {
  const [ calendar_id, setCalendar] = useState('');
  const value = { calendar_id, setCalendar };

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <CalendarContext.Provider value={value}>
            <Route path="/dashboard" component={MainApp} />
          </CalendarContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default IndexPage;

if (document.getElementById('app')) {
  ReactDOM.render(<IndexPage />, document.getElementById('app'))
}
