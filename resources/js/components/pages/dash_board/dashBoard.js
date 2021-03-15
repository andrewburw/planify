import { useEffect, useContext, useState } from "react";
import useFetch from './../../hooks/useFetch';
import { AvatarContext, UserContext } from './../../mainContext';
import { Link } from 'react-router-dom';
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
  const { avatar } = useContext(AvatarContext); // getting avatar object
  const { user_name } = useContext(UserContext); // getting user name
  useEffect(() => {

    runFetch('/api/userinfo', 'get');

  }, [])
  const showCalendar = (e) => {

    
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

  if (response !== 'null' && recivedData === null) { // infinite loop proteсtion

    setData(response.data);
    console.log(response.data)
    setTimeout(() => {
      /*

      async function -> if page not rendered but showAvatar function is called there is error: 
       you can't getById on not rendered element :) 
       
      */
      avatar !== undefined ? showAvatar(JSON.parse(avatar)) : '';
    }, 10);

  }

  return recivedData !== null ? (
    <>
      <div className="main_co">
        <div className="container">
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
              <div className="profile__rside">
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

                  {recivedData !== 'null' ? recivedData.map((item, i) => {
                    return  <div key={i} className="profile__rside-p-item" onClick={showCalendar}>
                      <h4 className="profile__rside-item-header">
                        <i className="far fa-address-card"></i> {item.calendar_name}
                                </h4>
                      <p className="profile__rside-item-users">2 users</p>
                    </div>
                   
                  }) : <img src={Loading} alt="Planify loading" />}



                </div>
                <h3 className="profile__rside-pined">Activity</h3>
                <div className="profile__rside-news-cont">
                  <h3 className="profile__rside-news-header">
                    <span>March 2021</span>
                  </h3>
                  <div className="profile__rside-time-line">
                    <h3 className="profile__rside-tl-header">
                      Crated 12 updates in 2 calendar
                    </h3>
                    <ul className="profile__rside-tl-list">
                      <li className="profile__rside-tl-item">
                        <span>Undusted</span> 1 - updates 03.03.21
                      </li>
                      <li className="profile__rside-tl-item">
                        <span>Undusted</span> 2 - updates 03.03.21
                      </li>
                      <li className="profile__rside-tl-item">
                        <span>Undusted</span> 3 - updates 03.03.21
                      </li>
                      <li className="profile__rside-tl-item">
                        <span>Undusted</span> 4 - updates 03.03.21
                      </li>
                      <li className="profile__rside-tl-item">
                        <span>Undusted</span> 5 - updates 03.03.21
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : <div className="full__page__loading"><img src={Loading} /></div>;;
}

export default DashBoard;