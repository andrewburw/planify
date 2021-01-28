const  Example = () => {
    return (
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
           <span className="modal-reg__right-close">&times;</span>
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
    );
}

export default Example;