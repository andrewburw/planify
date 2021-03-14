import { useContext } from 'react';
import AddCalendar from './../modals/menuModalAddCalendar';
import AddUser from './../modals/menuModalAddUser';
import Dialog from './../modals/dialogAsk';
import useModal from "./../hooks/useModal";
import { CalendarNameContext, UserContext, AvatarContext } from "./../mainContext";
import useFetch from './../hooks/useFetch';

import { Link } from "react-router-dom";
/* *************************************************************
|
|
|                    Header of main APP
|
|      
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const Header = ({ hideShowAside }) => {
  const { calendarName } = useContext(CalendarNameContext); // calendar id (global context)
  const [isShowingAdd, toggleAdd] = useModal();            // Create calendar
  const [isShowingAddUser, toggleAddUser] = useModal();   // Add user
  const [isShowingDialog, toggleDialog] = useModal();    // Dialog if toggled add user but calendar not selected
  const { user_name } = useContext(UserContext);
  const { avatar } = useContext(AvatarContext);
  const { runFetch } = useFetch();

  const logOut = () => {
    runFetch('/api/login/logout', 'get');
    window.location.reload();
  }

  const showAvatar = (data) => {
    // generate avatar picture
    let canvas = document.getElementById("header__avatar");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#4AA7FD";

    data.forEach((item) => {
      if (item.run) {
        ctx.fillRect(item.a, item.b, item.c, item.d);
        ctx.fillRect(280 - (item.a), item.b, 20, 20);
      }

    })

  }

  avatar !== undefined ? showAvatar(JSON.parse(avatar)) : '';
  let showAddCl = isShowingAdd ? showAddCl = <AddCalendar isShowing={isShowingAdd} hide={toggleAdd} /> : ''; // rendered only when called
  let showAddUser = isShowingAddUser ? showAddUser = <AddUser isShowing={isShowingAddUser} hide={toggleAddUser} /> : '' // rendered only when called
  let dialog = isShowingDialog ?

    <Dialog isShowing={isShowingDialog} result={toggleDialog}
      hide={toggleDialog}
      msg={'Please select calendar!'} /> : '';


  if (calendarName === false && isShowingAddUser) {// if calendar not selected toggled dialog "please select calendar"

    toggleAddUser();
    toggleDialog();

  }



  return (<>
    {dialog}
    {showAddCl}
    {showAddUser}
    <div className="header_co">
      <div className="container">
        <div className="header_co__inner">
          <div className="header_co__leftside">
            <div className="header_co__leftside-burgermenu" onClick={() => hideShowAside()}>
              <div className="header_co__leftside-b__menu-item"></div>
              <div className="header_co__leftside-b__menu-item"></div>
              <div className="header_co__leftside-b__menu-item"></div>

            </div>
            <h1 className="header_co__leftside-clname">{calendarName !== 'null' ? calendarName : ''}</h1>
          </div>


          <div className="header_co__rightside-menu">
            <div className="header_co__rside-menu-ddown">
              <p>Calendar Menu <img className="header_co__rside-menu-d-img" src="/images/arrow_down.png" /></p>
              <div className="header_co__rside-ddown-content">

                <p onClick={() => toggleAdd()}>Create new calendar</p>
                <p onClick={() => toggleAddUser()}>Add users to calendar</p>
                <p>Delete this calendar</p>
                <Link to="/dashboard/help"><p>Help</p></Link>

              </div>
            </div>

            <div className="header_co__profile">
              <div className="header_co__profilepicture">
                <canvas className="header_co__avatar" id="header__avatar">
                </canvas>
              </div>
              <div className="header_co__profile-ddown">
                <div className="header_co___profile-loginmenu">
                  <p>{user_name !== undefined ? user_name : ''} <img className="header_co__rside-menu-d-img" src="/images/arrow_down_bw.png" /></p>
                  <div className="header_co__profile-d-content">

                    <p onClick={() => logOut()}>Logout</p>
                    <Link to="/dashboard/profile"><p>Profile</p></Link>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Header;