import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import useValidate from './../../hooks/useValidationFrom'
import useFetch from './../../hooks/useFetch';
import Loading from './../../custom_modules/loading_white_full.svg'

/* *************************************************************
|
|
|                      Login Modal file
|
|       *  Modal for Logging in user.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/


const Modal = ({ isShowing, hide }) => {
  const [inputs, setInputs] = useState(
    {
      email: '',
      password1: ''
    });
  const [touched, setTouch] = useState(
    {
      email: false,
      password1: false,
    });
  const { testResults, setValidation } = useValidate();
  const { response, runFetch, error, isLoading } = useFetch();


  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    setTouch(inputs => ({ ...inputs, [event.target.name]: true }));

  }

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    let fetchData = {
      email: inputs.email,
      password: inputs.password1,

    }
    runFetch('/api/auth/login', 'post', fetchData);
    // token saved to cookie no localstorage here ;)
   
  }
 
  setValidation(inputs); // Outside hook, for cotrol fields and testing.

   if (error === null || response.serverError === false) { // if autentification is success redirect to dashboard
      return     <Redirect to="/dashboard" />;
   }

  let generateMsg = (data) => {

    let error = data.eror ? 'is-error' : 'no-error'; // Css class for errors color

    return <small className={error}>{data.msg}</small>;


  }
  // ***************************************************************************************

  // ------------------ Email FIELD CHECK -----------------------
  let emailMsg = '';
  let pass1Msg = '';


  if (testResults.email && touched.email) {
    emailMsg = generateMsg({ eror: true, msg: 'Error in Email field.Please check field data.' });
  }

  if (!testResults.email && touched.email) {
    emailMsg = generateMsg({ eror: false, msg: 'Good!' });
  }
  // ------------------ Password 1 FIELD CHECK -----------------------

  if (testResults.password1 && touched.password1) {
    pass1Msg = generateMsg({ eror: true, msg: 'Enter valid password.' });
  }

  if (!testResults.password1 && touched.password1) {
    pass1Msg = generateMsg({ eror: false, msg: 'Good!' });
  }

   // ------------------ BUTTON CHECK ----------------------- 
  // If form has errors -> button is disabled

  let btnLogin = <button className="modal-reg__right-buttn-reg" disabled>Login</button>;
  if (Object.values(testResults).every(x => (x === false)) && isLoading !== true) {
    // checks for errors in form 
    btnLogin = <button className="modal-reg__right-buttn-reg" onClick={handleSubmit}>Login</button>
  }
  
  // ------------------ LOGO SHOW ----------------------- 

  let showLogo = <img src="images/big-logo_login.png" alt="planify" />;
  if (isLoading === true) {

    showLogo = <div className="modal-reg__right-server-load"><img src={Loading} /></div>

  } else if (error !== null && error.serverError === true) {

    showLogo = '';
  }
  
  return isShowing ? ReactDOM.createPortal(
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
                  {showLogo}
                </div>

                <form className="modal-log__right-form">

                  <div className="modal-reg__form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                   
                      value={inputs.email}
                      onChange={handleInputChange}
                    />
                    {emailMsg}
                  </div>
                  <div className="modal-reg__form-group">
                    <label htmlFor="pass1">PSSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pass1"
                      name="password1"
                      placeholder="Enter password"
                      value={inputs.password}
                      onChange={handleInputChange}
                    />
                    {pass1Msg}
                  </div>
                  {error !== null && error.serverError === true ?
                    <div className="modal-reg__right-server-err">
                        <div>SERVER ERROR: Check fields or user does not exists!</div>
                    </div> : ''}


                  <div className="modal-log__right-form-footer">
                    {btnLogin}
                    <p className="modal-reg__right-f-f-registred"><a href="#" onClick={hide}>I am not a member</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;
}
export default Modal;