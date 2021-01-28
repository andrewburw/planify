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

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const  IndexPage = () => {
    return (
        <div className="App">
      <Router  basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route  path="/main" component={MainApp} />
      </Switch>
      </Router>
    </div>
    );
}

export default IndexPage;

if (document.getElementById('app')) {
    ReactDOM.render(<IndexPage />, document.getElementById('app'))}
