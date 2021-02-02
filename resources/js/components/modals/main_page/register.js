
import ReactDOM from 'react-dom';
import React from 'react';

import useSignUpForm from './../../hooks/useLoginRegister'

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


//const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

const Modal = ({ isShowing, hide }) => {
  
  
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
  
  
  
  
  
  
  return ReactDOM.createPortal(
  <React.Fragment>
  
      <div id="myModal" className="modal">
     
     <div className="modal-content">
       <div className="modal-reg__container">
         <div className="modal-reg__left-side">
           <div className="modal-reg__header"><h1>Planify</h1></div>
           <div className="modal-reg__headindn-cont">
             <h1 className="modal-reg__heading-welcome">Welcome to Planify.</h1>
             <h4 className="modal-reg__heading-subwelcome">Ready to Join?</h4>
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
             <form  className="modal-reg__right-form">
               <div className="modal-reg__form-group">
                 <label htmlFor="username">USERNAME</label>
                 <input
                   type="text"
                   className="form-control"
                   id="username"
                   placeholder="Enter username"
                   onChange={handleInputChange}
                   value={inputs.userName}
                 />
                 <small  className="">We'll never share your email with anyone else.</small>
               </div>
               <div className="modal-reg__form-group">
                 <label htmlFor="email">EMAIL</label>
                 <input
                   type="email"
                   className="form-control"
                   id="email"
                   placeholder="Enter email"
                   onChange={handleInputChange}
                   value={inputs.email}
                 />
                 <small  className="">We'll never share your email with anyone else.</small>
               </div>
               <div className="modal-reg__form-group">
                 <label htmlFor="pass1">PSSWORD</label>
                 <input
                   type="password"
                   className="form-control"
                   id="pass1"
                   placeholder="Enter password"
                   onChange={handleInputChange}
                   value={inputs.password}
                 />
               <small  className="">We'll never share your email with anyone else.</small>
               </div>
               <div className="modal-reg__form-group">
                 <label htmlFor="pass2">REAPEAT PASSWORD</label>
                 <input
                   type="password"
                   className="form-control"
                   id="pass2"
                   placeholder="Repeat password"
                   onChange={handleInputChange}
                   value={inputs.confirmPssword}
                 />
                  <small  className="">We'll never share your email with anyone else.</small>
               </div>
               <div className="modal-reg__right-form-footer">
                 <button className="modal-reg__right-buttn-reg">Register</button>
                 <p className="modal-reg__right-f-f-registred">I am alredy a member</p>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div> 
   </React.Fragment>, document.body
) }

export default Modal;