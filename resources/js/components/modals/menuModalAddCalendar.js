import ReactDOM from 'react-dom';
import React, { useState, useEffect, useContext } from 'react';
import checkField from './../hooks/custom_modules/checkFields';
import { UserContext } from './../index';
//import useFetch from './../hooks/useFetch';
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
  const { user } = useContext(UserContext);
  /*    const { response, runFetch,error} = useFetch();


    useEffect(() => {
        let test = null;
        if (editData !== undefined && editData !== 'null') {
            test = editData.split("-");
            setError({ status: null })
            setInputs({ start: test[0], end: test[1], day: test[2] });
        }


    }, [editData]);
*/


    const handleInputChange = (event) => {
        event.persist();
          
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));

    }




    const handelSubmit = (event) => {

        event.preventDefault();

        if (checkField.checkField('username',inputs.calendarName)) { // calendar name validation TRUE -> has errors
            
            setError({status:true,error: "Please check fields!"})
        } else {

            console.log({calendarName: inputs.calendarName,admin: user})
        }
           
    }
  
    return isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal">

                <div className="modal-content add-modal">
                    <div className="add-modal-container">
                        <span className="modal-reg__right-close" onClick={hide}>&times;</span>
                        <h1>Planify</h1>
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
                                      placeholder="Add calendar name"   required />
                                </div>
                                <div className="add-modal__f-group">
                                    <label htmlFor="appt">Add users:</label>
                                    <input type="text" name="users" onChange={handleInputChange} value={inputs.users}
                                      placeholder="Add users"   disabled />
                                </div>
                            </div>


                            <div className="edit-modal-buttons">

                                <button className="btn red-btn" onClick={hide}>Cancel</button>
                                <button className="btn edit-modal-btn-save" onClick={handelSubmit}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;
}

export default Modal;