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

import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './main';
import MainApp from './pages/mainApp';
import mainApp from './pages/mainApp'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
//  <Router  basename={process.env.PUBLIC_URL}>
// <Route   exact path="/main" component={MainApp} />
const  IndexPage = () => {
    return (
        <div>
      <Router >
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route   path="/dashboard" component={MainApp} />
      </Switch>
      </Router>
    </div>
    );
}

export default IndexPage;

if (document.getElementById('app')) {
    ReactDOM.render(<IndexPage />, document.getElementById('app'))}
