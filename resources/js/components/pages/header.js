import { useContext } from 'react';
import AddCalendar from './../modals/menuModalAddCalendar';
import AddUser from './../modals/menuModalAddUser';
import Dialog from './../modals/dialogAsk';
import useModal from "./../hooks/useModal";
import { CalendarNameContext } from "./../mainContext";
import useFetch from './../hooks/useFetch';
import { UserContext } from "./../mainContext";
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

const Header = () => {
  const { calendarName } = useContext(CalendarNameContext); // calendar id (global context)
  const [isShowingAdd, toggleAdd] = useModal();            // Create calendar
  const [isShowingAddUser, toggleAddUser] = useModal();   // Add user
  const [isShowingDialog, toggleDialog] = useModal();    // Dialog if toggled add user but calendar not selected
  const { user_name } = useContext(UserContext);
  const { runFetch } = useFetch();

  const logOut = () => {
    runFetch('/api/login/logout', 'get');
    window.location.reload();
  }


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
            <div className="header_co__leftside-burgermenu">
              <div className="header_co__leftside-b__menu-item"></div>
              <div className="header_co__leftside-b__menu-item"></div>
              <div className="header_co__leftside-b__menu-item"></div>

            </div>
            <h1 className="header_co__leftside-clname">{calendarName !== 'null' ? calendarName : ''}</h1>
          </div>

          
          <div className="header_co__rightside-menu">
            <div className="header_co__rside-menu-ddown">
              <p>Calndar Menu <img className="header_co__rside-menu-d-img" src="/images/arrow_down.png" /></p>
              <div className="header_co__rside-ddown-content">

                <p onClick={() => toggleAdd()}>Create new Calendar</p>
                <p onClick={() => toggleAddUser()}>Add Users to calendar</p>
                <p>Link 3</p>

              </div>
            </div>

            <div className="header_co__profile">
              <img src="/images/myself_1.png" height="40" width="40" width="40" alt="" />
              <div className="header_co__profile-ddown">
                <div className="header_co___profile-loginmenu">
                  <p>{user_name !== undefined ? user_name : ''} <img className="header_co__rside-menu-d-img" src="/images/arrow_down_bw.png" /></p>
                  <div className="header_co__profile-d-content">

                    <p onClick={() => logOut()}>Logout</p>
                    <p>Profile</p>
                    <p>Link 3</p>

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