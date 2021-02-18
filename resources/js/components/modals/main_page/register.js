
import ReactDOM from 'react-dom';
import React from 'react';
import useSignUpForm from './../../hooks/useCheckRegister';

/* *************************************************************
|
|
|                      Register Modal file
|
|       *  Modal for registration a new user.
|
|      Concept: this input data passed to -> 
|                useSignupForm(usless file): hendle all inputs and passed data to ->
|                useValidationForm: send data to validation ->
|                custom module checkField.js: data validation 
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



const Modal = ({ isShowing, hide }) => {


  const { inputs, handleInputChange, handleSubmit,
    testResults, touched, response, error, isLoading } = useSignUpForm();
  // ********** Input msg error generator *******************

  let generateMsg = (data) => {

    let error = data.eror ? 'is-error' : 'no-error'; // Css class for errors color

    return <small className={error}>{data.msg}</small>;


  }
  //******************SERVER ERROR GENERATOR ********************
  
  let generateErrorList = () => {
    let result = [];
    for (var prop in error.errors) {

      result.push(error.errors[prop])

    }
    return result;
  }

  //***********************************************************
  let nameMsg = '';
  let emailMsg = '';
  let pass1Msg = '';
  let pass2Msg = '';

  // console.log(response)
  //console.log( error !== null ? error.errors  : '')


  /* 
    testResults : is returned object with values true/false.
    TRUE => passed validation,
    FALSE => not passed validation

  */

  // ------------------ NAME FIELD CHECK -----------------------
  if (testResults.username && touched.username) {
    nameMsg = generateMsg({ eror: true, msg: 'Error in Name field.Please check field data.' });
  }

  if (!testResults.username && touched.username) {
    nameMsg = generateMsg({ eror: false, msg: 'Good!' });
  }

  // ------------------ Email FIELD CHECK -----------------------


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


  // ------------------ Password 2 FIELD CHECK -----------------------

  if (testResults.password2 && touched.password2) {
    pass2Msg = generateMsg({ eror: true, msg: 'Passwords must match.' });
  }

  if (!testResults.password2 && touched.password2) {
    pass2Msg = generateMsg({ eror: false, msg: 'Good!' });
  }


  // ------------------ BUTTON CHECK ----------------------- 
  // If form has errors -> button is disabled

  let btnRegister = <button className="modal-reg__right-buttn-reg" disabled>Register</button>;
  if (Object.values(testResults).every(x => (x === false))) {
    // checks for errors in form 
    btnRegister = <button className="modal-reg__right-buttn-reg" onClick={handleSubmit}>Register</button>
  }
  // ------------------ LOGO SHOW ----------------------- 

  let showLogo = <img src="images/big-logo_login.png" alt="planify" />;
  if (isLoading === true) {
  
    showLogo = <div className="modal-reg__right-server-load"><object data="/images/loading.svg" type="image/svg+xml"></object></div>
  
  } else if (error !== null && error.serverError === true) {

    showLogo = '';
  }
  //isShowing ? ReactDOM.createPortal(
  return isShowing ? ReactDOM.createPortal(
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
                  {showLogo}

                </div>
                <form className="modal-reg__right-form">
                  <div className="modal-reg__form-group">
                    <label htmlFor="username">USERNAME</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter username"
                      onChange={handleInputChange}
                      value={inputs.userName}
                      maxLength="30"
                    />
                    {nameMsg}
                  </div>
                  <div className="modal-reg__form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleInputChange}
                      value={inputs.email}
                      maxLength="30"
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
                      onChange={handleInputChange}
                      value={inputs.password}
                      maxLength="30"
                    />
                    {pass1Msg}
                  </div>
                  <div className="modal-reg__form-group">
                    <label htmlFor="pass2">REAPEAT PASSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pass2"
                      name="password2"
                      placeholder="Repeat password"
                      onChange={handleInputChange}
                      value={inputs.confirmPssword}
                      maxLength="30"
                    />
                    {pass2Msg}
                  </div>

                  {error !== null && error.serverError === true ?
                    <div className="modal-reg__right-server-err">
                        <div>SERVER ERROR: <ul>{generateErrorList().map((number,i) =>
                                 <li key={i}>{number}</li>)}</ul></div>
                    </div> : ''}


                  <div>


                  </div>
                  <div className="modal-reg__right-form-footer">
                    {btnRegister}
                    <p className="modal-reg__right-f-f-registred">I am alredy a member</p>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : '';
}

export default Modal;