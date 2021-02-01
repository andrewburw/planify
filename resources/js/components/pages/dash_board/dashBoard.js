
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const  DashBoard = () => {
    return (
      <div>
          <h1>DashBOard</h1>
          <Link to="/dashboard/month"> <button className="header__try-button" >Try Product</button></Link>
    </div>
    );
}

export default DashBoard;