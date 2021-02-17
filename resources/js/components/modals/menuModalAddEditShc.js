import ReactDOM from 'react-dom';
import React, { useState, useEffect, useContext } from 'react';
import validation from './../custom_modules/validateTime';
import { UserContext } from './../index';

/* *************************************************************
|
|
|                      Edit change schedule Modal file
|
|       *Edit or set schedule.
|
|       *Used in: mainAppWeek.js
|
|       Concept: recived data form mainAppWeek.js ->
|                 if data is null it creates new record,
|                 if data recived time string: user can change it,
|                 if user chage data: new data validated in custom module "validateTime.js"
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/


const Modal = ({ isShowing, hide, editData, allWeekData }) => {


    // editData -> recived string: "02:00-08:00" or "null" if taken free time
    // in first render recived undefined
    // allWeekData = > all data recived for week


    const [inputs, setInputs] = useState({ start: '', end: '' });
    const [error, setError] = useState({ status: null });
    const { user } = useContext(UserContext);



    useEffect(() => {
        let test = null;
        if (editData !== undefined && editData !== 'null') {
            test = editData.split("-");
            setError({ status: null })
            setInputs({ start: test[0], end: test[1], day: test[2] });
        }


    }, [editData]);



    const handleInputChange = (event) => {
        event.persist();

        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));

    }




    const handelSubmit = (event) => {

        if (event) {
            event.preventDefault();
        }

        let validationResults = validation(inputs, allWeekData, user) // user -> user Logged in
        //validationResults returns object : {error:"This time is busy!",status: true }
        // status -> true = has errors

            console.log(validationResults)
        if (validationResults.status) { // true -> has errors
            setError(validationResults)
        } else {

            console.log('data sended')
        }
       
    }
  
    return isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="edit-modal">

                <div className="edit-modal-content">
                    <div className="edit-modal-container">
                        <span className="modal-reg__right-close" onClick={hide}>&times;</span>
                        <h1>Planify</h1>
                        {error.status !== null ? <div className="modal-reg__right-server-err" >
                            <div>Error:{error.error}</div>
                        </div> :
                            <div className="edit-modal-logo">
                                <img src="/images/big-logo_login.png" alt="planify" />
                            </div>
                        }

                        <form className="edit-modal-form">
                            <div className="edit-modal-f">
                                <div className="edit-modal-f_group">
                                    <label htmlFor="appt">From:</label>
                                    <input type="time" id="appt" name="appt" name="start" onChange={handleInputChange} value={inputs.start}
                                        required />
                                </div>
                                <div className="edit-modal-f_group">
                                    <label htmlFor="appt">To:</label>
                                    <input type="time" id="appt" name="appt" name="end" onChange={handleInputChange} value={inputs.end}
                                        required />
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