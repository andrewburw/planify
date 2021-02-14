import ReactDOM from 'react-dom';
import React, { useState ,useEffect} from 'react';
import validation from './../custom_modules/validateTime'

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
|                 if data is null/undefined it creates new record,
|                 if data recived time sting: user can change it,
|                 if user chage data: new data validated in custom module "validateTime.js"
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



const Modal = ({ isShowing, hide, editData,allWeekData }) => {
    // editData -> recived string: "02:00-08:00" or "null" if taken free time
    // in first render recived undefined
   // allWeekData = > all data recived for week
    const [inputs, setInputs] = useState({ start: '', end: '' });


    useEffect(() => {
        let test = null
        if (editData !== undefined && editData !== 'null') {
            test = editData.split("-");

            setInputs({ start: test[0], end: test[1] })
        }


    },[editData]);
    
   

    const handleInputChange = (event) => {
        event.persist();
        let validationResults = validation()
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));

    }

   

    return isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="edit-modal">

                <div className="edit-modal-content">
                    <div className="edit-modal-container">
                        <span className="modal-reg__right-close" onClick={hide}>&times;</span>
                        <h1>Planify</h1>
                        <div className="edit-modal-logo">
                            <img src="/images/big-logo_login.png" alt="planify" />
                        </div>


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
                                <button className="btn edit-modal-btn-save">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;
}

export default Modal;