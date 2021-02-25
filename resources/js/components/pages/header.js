import {useContext} from 'react';
import AddCalendar from './../modals/menuModalAddCalendar';
import useModal from "./../hooks/useModal";
import {CalendarNameContext} from "./../mainContext";


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
  const { calendarName} = useContext(CalendarNameContext); // calendar id (global context)
  const [isShowingAdd, toggleAdd] = useModal();

 
  return ( <>
          <AddCalendar isShowing={isShowingAdd} 
                         hide={toggleAdd} />
    <div className="header_co">
      <div className="container">
        <div className="header_co__inner">
          <div className="header_co__leftside">
            <div className="header_co__leftside-burgermenu">
              <div className="header_co__leftside-b__menu-item"></div>
              <div className="header_co__leftside-b__menu-item"></div>
              <div className="header_co__leftside-b__menu-item"></div>
              <div className="header_co__leftside-ddown-content">
           
                <p onClick={()=>toggleAdd()}>Create new Calendar</p>
                <p>Link 2</p>
                <p>Link 3</p>
             
              </div>
            </div>
            <h1 className="header_co__leftside-clname">{calendarName !== 'null' ? calendarName : ''}</h1>
          </div>
          <div className="header_co__rightside-menu">
            <div className="header_co__rside-menu-ddown">
              <p>Menu <img className="header_co__rside-menu-d-img" src="/images/arrow_down.png" /></p>
            </div>

            <div className="header_co__profile">
              <img src="/images/myself_1.png" height="40" width="40" width="40" alt="" />
              <div className="header_co__profile-ddown">
                <p>Andrew B <img className="header_co__rside-menu-d-img" src="/images/arrow_down_bw.png" /></p>
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