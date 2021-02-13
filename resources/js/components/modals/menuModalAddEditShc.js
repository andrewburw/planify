import ReactDOM from 'react-dom';
import React from 'react';


/* *************************************************************
|
|
|                      Edit change schedule Modal file
|
|       *Edit or Change schedule.
|
|       *Used in: mainAppWeek.js
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



const Modal = ({ isShowing, hide , editData}) => {
    
    
    console.log(editData)
    
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
                            <input type="time" id="appt" name="appt"
                                min="09:00" max="18:00" required />
                        </div>
                        <div className="edit-modal-f_group">
                            <label htmlFor="appt">To:</label>
                            <input type="time" id="appt" name="appt"
                                min="09:00" max="18:00" required />
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
) : null;}

export default Modal;