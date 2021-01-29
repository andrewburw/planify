/* *************************************************************
|
|
|                      Register Modal file
|
|       *  Modal for registration a new user.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/


import ReactDOM from 'react-dom';
import React from 'react';



const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
     <div className="modal">
     
     <div className="modal-content">
       <div className="modal-reg__container">
         <div className="modal-log__left-side">
           <div className="modal-reg__header"><h1>Planify</h1></div>
           <div className="modal-reg__headindn-cont">
             <h1 className="modal-reg__heading-welcome">Welcome Back.</h1>
             <h4 className="modal-reg__heading-subwelcome">Ready to Login?</h4>
           </div>
           <div className="modal-reg__footer">
             <img src="images/social_icons/fbng1.png" alt="planify" />
             <img src="images/social_icons/in.png" alt="planify" />
             <img src="images/social_icons/insta.png" alt="planify" />
           </div>
         </div>
         <div className="modal-reg__right-side">
           <div className="modal-reg__right-container">
           <span className="modal-reg__right-close" onClick={hide}>&times;</span>
             <div className="modal-reg__right__logo">
               <img src="images/big-logo_login.png" alt="planify" />
             </div>
               
             <form  className="modal-log__right-form">
              
               <div className="modal-reg__form-group">
                 <label htmlFor="email">EMAIL</label>
                 <input
                   type="email"
                   className="form-control"
                   id="email"
                   placeholder="Enter email"
                 />
                 <small  className="hide">We'll never share your email with anyone else.</small>
               </div>
               <div className="modal-reg__form-group">
                 <label htmlFor="pass1">PSSWORD</label>
                 <input
                   type="password"
                   className="form-control"
                   id="pass1"
                   placeholder="Enter password"
                 />
               <small className="hide">We'll never share your email with anyone else.</small>
               </div>
              
               <div className="modal-log__right-form-footer">
                 <button className="modal-reg__right-buttn-reg">Login</button>
                 <p className="modal-reg__right-f-f-registred"><a href="#">I am not a member</a></p>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div> 
   </React.Fragment>, document.body
) : null;

export default Modal;