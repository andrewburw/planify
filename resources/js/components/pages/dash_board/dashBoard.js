
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

/* *************************************************************
|
|
|                     Month calendar file
|
|       *  Dash board file.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
const  DashBoard = () => {
    return (
      <div>
          <h1>DashBOard</h1>
          <Link to="/dashboard/month"> <button className="header__try-button" >Try Product</button></Link>
    </div>
    );
}

export default DashBoard;