import { useEffect, useContext, useState } from "react";
import useFetch from './../../hooks/useFetch';
import { AvatarContext, UserContext,CalendarNameContext, CalendarContext} from './../../mainContext';
import { Link ,Redirect } from 'react-router-dom';
import Loading from './../../custom_modules/loading_white_full.svg';
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

const DashBoard = () => {
  const { response, runFetch, error } = useFetch();
  const [recivedData, setData] = useState(null);
  const [redirect , setRedirect] = useState(false)
  const { avatar } = useContext(AvatarContext); // getting avatar object
  const { user_name } = useContext(UserContext); // getting user name
  const {setCalendar } = useContext(CalendarContext);
  const {setCalendarName } = useContext(CalendarNameContext);
  useEffect(() => {

    runFetch('/api/userinfo', 'get');

  }, [])
  const showCalendar = (e) => {
  
    setCalendar(e.target.dataset.id); 
    setCalendarName(e.target.dataset.name);
    setRedirect(true);

  }
  const showAvatar = (data) => {

    //recived data from avatar context and parsed to profile picture
    let canvas = document.getElementById("profile__l-avatar-canvas");
    if (canvas === null) return
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#4AA7FD";

    data.forEach((item) => {
      if (item.run) {
        ctx.fillRect(item.a, item.b, item.c, item.d);
        ctx.fillRect(280 - (item.a), item.b, 20, 20);
      }

    })

  }
  if (redirect) { // redirect to month calendar
    return <Redirect to='/dashboard/month'></Redirect>;
  }


  if (response !== 'null' && recivedData === null) { // infinite loop proteсtion

    setData(response);
   
    setTimeout(() => {
      /*

      async function -> if page not rendered but showAvatar function is called there is error: 
       you can't getById on not rendered element :) 
       
      */
      avatar !== undefined ? showAvatar(JSON.parse(avatar)) : '';
    }, 10);

  }
  const date = new Date(); 
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return recivedData !== null ? (
    <>
               <div className="main_co__month-name">
            <h1>Profile</h1>
            <div className="profile__container">
              <div className="profile__lside">
                <div className="profile__lside-avatar">
                  <canvas id="profile__l-avatar-canvas" className="profile__lside-canvas"></canvas>
                </div>
                <h4 className="profile__lside-username">{user_name !== undefined ? user_name : ''}</h4>
                <div className="profile__lside-buttons">
                  <Link to="/dashboard/profileupdate"><button className="profile__lside-edit">Edit profile</button></Link>
                </div>
              </div>
              <div className="profile__rside" >
                <div className="profile__rside-header">
                  <ul className="profile__rside-menu">
                    <li className="profile__rside-menu-item">
                      <i className="fas fa-atlas"></i> Overview
                    </li>
                    <li className="profile__rside-menu-item">
                      <i className="far fa-calendar-alt"></i> Calendars
                    </li>
                    <li className="profile__rside-menu-item">
                      <i className="fas fa-user"></i> Users
                    </li>
                  </ul>
                </div>
                <hr className="profile__rside-hr" />

                <h3 className="profile__rside-pined">Pinned</h3>

                <div className="profile__rside-p-container">

                  {recivedData !== 'null' ? recivedData.dataCalendars.map((item, i) => {
                    return  <div key={i} className="profile__rside-p-item" data-id={item.id} data-name={item.calendar_name} onClick={showCalendar}>
                      <h4  data-id={item.id} data-name={item.calendar_name} className="profile__rside-item-header">
                        <i  data-id={item.id} data-name={item.calendar_name} className="far fa-address-card"></i> {item.calendar_name}
                      </h4>
                      <p  data-id={item.id} data-name={item.calendar_name} className="profile__rside-item-users">2 users</p>
                    </div>
                   
                  }) : <img src={Loading} alt="Planify loading" />}



                </div>
                <h3 className="profile__rside-pined">Activity</h3>
                <div className="profile__rside-news-cont">
                  <h3 className="profile__rside-news-header">
                    <span>{month} {year}</span>
                  </h3>
                  <div className="profile__rside-time-line">
                    <h3 className="profile__rside-tl-header">
                      Crated 9 updates in 2 calendar
                    </h3>
                    <ul className="profile__rside-tl-list">

                    {recivedData !== 'null' ? recivedData.dataNews.map((item, i) => {
                    return   <li key={i} className="profile__rside-tl-item">
                    <span>{item.calendar_name}</span> {i+1} - updated at {item.updated_at.split("T")[0]}
                  </li>
                   
                  }) : <img src={Loading} alt="Planify loading" />}

                   
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
    </>
  ) : <div className="full__page__loading"><img src={Loading} /></div>;;
}

export default DashBoard;