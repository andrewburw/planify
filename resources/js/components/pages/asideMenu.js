
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
/* *************************************************************
|
|
|                      Aside JS file
|
|       * Aside menu component.
|      
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
const  AsideMenu = () => {
    return (
        <div className="leftmenu">
        <div className="left_menu-container">
          <div className="leftmenu__logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="leftmenu__pages">
            <div className="leftmenu__pages-con">
              <h4 className="leftmenu_p-header">Pages</h4>
              <ul className="leftmenu_p-list">
              <Link to="/dashboard"><li className="leftmenu_p-list-item">Main</li></Link>
                <li className="leftmenu_p-list-item">Calendar</li>
              </ul>
            </div>
          </div>
          <div className="leftmenu__pages">
            <div className="leftmenu__pages-con">
              <h4 className="leftmenu_p-header">Calendars</h4>
              <ul className="leftmenu_p-list">
              <Link to="/dashboard"> <li className="leftmenu_p-list-item">Undusted [gant]</li></Link>
              <Link to="/dashboard"> <li className="leftmenu_p-list-item">Undusted [Month]</li></Link>
              <Link to="/dashboard"> <li className="leftmenu_p-list-item">Undusted [week]</li></Link>
   
              </ul>
            </div>
          </div>
          <div className="leftmenu__pages">
            <div className="leftmenu__pages-con">
              <h4 className="leftmenu_p-header">Users</h4>
              <ul className="leftmenu_p-list">
                <li className="leftmenu_p-list-item">User 1</li>
                <li className="leftmenu_p-list-item">User 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AsideMenu;