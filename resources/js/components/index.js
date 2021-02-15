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

import React, { useContext } from 'react';
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
const UserContext = React.createContext({ user: 'andrew' });


const IndexPage = () => {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <UserContext.Provider value={{ user: 'andrew' }}>
            <Route path="/dashboard" component={MainApp} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default IndexPage;

if (document.getElementById('app')) {
  ReactDOM.render(<IndexPage />, document.getElementById('app'))
}
