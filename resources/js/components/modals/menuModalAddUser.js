import ReactDOM from 'react-dom';
import React, { useState, useEffect, useContext } from 'react';
import checkField from './../hooks/custom_modules/checkFields';
import useFetch from './../hooks/useFetch';
import {CalendarContext } from './../mainContext';
/* *************************************************************
|
|
|                      ADD  NEW CALENDAR Modal file
|
|      |
|       *Used in: pages/header.js
|
|      
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/


const Modal = ({ isShowing, hide }) => {

  const {calendar_id } = useContext(CalendarContext)
  const [inputs, setInputs] = useState({ userName: ''});
  const [error1, setError] = useState({ serverError: null });
  const [buttonProtect, setProtect] = useState(false); // Button protection to not press multiply time
  const { response, runFetch,error} = useFetch();


    useEffect(() => {
   
    if (response.serverError === false ) { // Fetch error handler
 
        window.location.reload()

    } else if (error.serverError === true) {
  
       setError({serverError:true,error: "No user found"})
   
    }
      

    }, [error,response]);

        

    const handleInputChange = (event) => {
        event.persist();
          
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value.trim() }));

    }




    const handelSubmit = (event) => {

        event.preventDefault();

        if (checkField.checkField('email',inputs.userName)) { // calendar name validation TRUE -> has errors
            
            setError({errorStatus:true,error: "Please check fields!"});

        } else {
         
           setProtect(true);
           runFetch('/api/share','post',{email: inputs.userName,calendar_id: calendar_id});
            //due to the characteristics of the react the answer(is error or not) of fetch is handled in useEffect ;)
           
        }
           
    }
  
    return isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal">

                <div className="modal-content add-modal">
                    <div className="add-modal-container">
                        <span className="modal-reg__right-close" onClick={hide}>&times;</span>
                        <h1>Planify</h1>
                        <span style={{color: '#a3a1a1',fontWeight: 'normal',fontSize: '12px'}}>Add User</span>
                        {error1.serverError !== null ? <div className="modal-reg__right-server-err" >
                            <div>Error:{error1.error}</div>
                        </div> :
                            <div className="edit-modal-logo">
                                <img src="/images/big-logo_login.png" alt="planify" />
                            </div>
                        }

                        <form className="add-modal__form">
                            <div className="add-modal-f">
                                <div className="add-modal__f-group">
                                    <label htmlFor="appt">Add user:</label>
                                    <input type="text" name="userName" onChange={handleInputChange} value={inputs.userName}
                                      placeholder="Eneter friend email"   required />
                                </div>
                                
                            </div>


                            <div className="edit-modal-buttons" style={{paddingTop: '50px'}}>

                                <button className="btn red-btn" onClick={hide}>Cancel</button>

                              {!buttonProtect ? <button className="btn edit-modal-btn-save" onClick={handelSubmit}>Save</button> :
                              
                              <button className="btn edit-modal-btn-save" disabled>Save</button>
                              
                              } 

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;
}

export default Modal;