import { useEffect, useContext, useState } from "react";
import { AvatarContext } from './../../mainContext';
import  generate  from './../../custom_modules/generateAvatar';
/* *************************************************************
|
|
|                    Profile component
|
|     
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



const Profile = () => {
  const { avatar } = useContext(AvatarContext);





  const showAvatar = (data) => {

    //recived data from avatar context and parsed to profile picture
    let canvas = document.getElementById("psettings__l-avatar-canvas");
    if (canvas === null) return
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#4AA7FD";
    ctx.clearRect(20, 20, 280, 280);
    data.forEach((item) => {
      if (item.run) {
        ctx.fillRect(item.a, item.b, item.c, item.d);
        ctx.fillRect(280 - (item.a), item.b, 20, 20);
      }

    })

  }
  const generateAvatar = () => {

    let data = generate.generate();
    showAvatar(data);

  }
  setTimeout(() => {
    /*

    async function -> if page not rendered but showAvatar function is called there is error: 
     you can't getById on not rendered element :) 
     
    */
    avatar !== undefined ? showAvatar(JSON.parse(avatar)) : '';
  }, 10);

  return (
    <>

      <div className="main_co__month-name">
        <h1>Settings</h1>
      </div>
      <div className="psettings__container">
        <div className="psettings__lside">
          <div className="psettings__lside-avatar">
            <canvas id="psettings__l-avatar-canvas" className="psettings__lside-canvas"></canvas>
          </div>
          <h4 className="psettings__lside-username">Profile picture</h4>
          <div className="psettings__lside-buttons">
            <button className="psettings__lside-edit" onClick={generateAvatar}>Generate profile picture</button>
          </div>
        </div>
        <div className="psettings__rside">

          <div className="psettings__rside-header">
            <h4>Profile Settings</h4>
          </div>
          <hr className="psettings__rside-hr" />
          <div className="psettings__chform">
            <form>
              <div className="psettings__rside-form-group">
                <label htmlFor="psettingsName">Name</label>
                <input type="text" className="psettings__rside-form-control" id="psettingsName" disabled />
                <small className="psettings__rside-form-text">Your name.</small>
              </div>

              <div className="psettings__rside-form-group">
                <label htmlFor="psettingsEmail">Email address</label>
                <input type="email" className="psettings__rside-form-control" id="psettingsEmail" disabled />
                <small className="psettings__rside-form-text">We'll never share your email with anyone else.</small>
              </div>

              <div className="psettings__rside-form-group">
                <label htmlFor="psettingsBio">Bio</label>
                <input type="email" className="psettings__rside-form-c-textarea" id="psettingsBio" disabled />

              </div>
              <div className="psettings__rside-form-group">
                <label htmlFor="psettingsOldPassword">Old Password</label>
                <input type="password" className="psettings__rside-form-control" id="psettingsOldPassword" disabled />

              </div>

              <div className="psettings__rside-form-group">
                <label htmlFor="psettingsPassword1">Password</label>
                <input type="password" className="psettings__rside-form-control" id="psettingsPassword1" disabled />

              </div>

              <div className="psettings__rside-form-group">
                <label htmlFor="psettingsPassword2">Confirm password</label>
                <input type="password" className="psettings__rside-form-control" id="psettingsPassword12" disabled />
                <small className="psettings__rside-form-text">Please confirm new password.</small>
              </div>
              <div className="psettings__rside-from-buttons">
                <button className="psettings__rside-from-update" disabled>Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Profile;