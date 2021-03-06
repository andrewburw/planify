import ReactDOM from 'react-dom';
import React, { useState, useEffect, useContext } from 'react';
import checkField from './../hooks/custom_modules/checkFields';
import useFetch from './../hooks/useFetch';
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


 

  const [inputs, setInputs] = useState({ calendarName: '', users: '' });
  const [error1, setError] = useState({ status: null });
  const [buttonProtect, setProtect] = useState(false); // Button protection to not press multiply time
  const { response, runFetch,error} = useFetch();


    useEffect(() => {
   
    if (response.serverError === false ) { // Fetch error handler
 
        window.location.reload()

    }  
    
    if (error.serverError) {
        setError({status: true, error: error.errors});
        setProtect(false);
    }
      

    }, [error,response]);

         
    const handleInputChange = (event) => {
        event.persist();
          
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value.trim() }));

    }




    const handelSubmit = (event) => {

        event.preventDefault();

        if (checkField.checkField('username',inputs.calendarName)) { // calendar name validation TRUE -> has errors
            
            setError({status:true,error: "Please check fields!"});

        } else {
           // console.log({calendar_name: inputs.calendarName,user_id: 1})
           setProtect(true)
            runFetch('/api/newcalendar','post',{calendar_name: inputs.calendarName});
            //due to the characteristics of the react the answer(is error or not) of fetch is handled in useEffect ;)
            
        }
           
    }
  
    return isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal">

                <div className="modal-content add-modal">
                    <div className="add-modal-container">
                        <span className="modal-reg__right-close" onClick={hide}>&times;</span>
                        <h1>Palanify</h1>
                        <span style={{color: '#a3a1a1',fontWeight: 'normal',fontSize: '12px'}}>Add Calendar</span>
                        {error1.status !== null ? <div className="modal-reg__right-server-err" >
                            <div>Error:{error1.error}</div>
                        </div> :
                            <div className="edit-modal-logo">
                                <img src="/images/big-logo_login.png" alt="planify" />
                              
                            </div>
                            
                        }

                        <form className="add-modal__form">
                            
                            <div className="add-modal-f">
                                <div className="add-modal__f-group">
                                    <label htmlFor="appt">Calendar name:</label>
                                    <input type="text" name="calendarName" onChange={handleInputChange} value={inputs.calendarName}
                                      placeholder="Add calendar name" autoComplete="off"  required />
                                </div>
                                <div className="add-modal__f-group">
                                    <label htmlFor="appt">Calendar type:</label>
                                    <select type="select" name="users" placeholder="Add users"  disabled>
                                        <option value="def">Select...</option>
                                        <option value="ganth">Ganth</option>
                                        <option value="regular">Regular</option>
                                    </select>
                                </div>
                            </div>


                            <div className="edit-modal-buttons">

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