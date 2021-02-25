import React from 'react';
import ReactDOM from 'react-dom';

/* *************************************************************
|
|
|                     Universal Ask dialog
|
|     
|
|       *Used in: mainAppWeek.js
|     
|       My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



const MenuDelete = ({ isShowing, hide,msg,result }) => {



 const handelSubmit = () =>{

    result(true);
 }

  return isShowing ? ReactDOM.createPortal(

 <React.Fragment><div className="edit-modal">

 <div className="edit-modal-content">
     <div className="edit-modal-container">
         <span className="modal-reg__right-close" onClick={hide}>&times;</span>
         <h1>Planify</h1>
        
         <h1 style={{paddingTop: '60px'}}>{msg}</h1> 
             <div className="edit-modal-buttons" style={{paddingTop: '100px'}} >

                 <button className="btn red-btn" onClick={hide}>Cancel</button>
                 <button className="btn edit-modal-btn-save" onClick={handelSubmit}>OK</button>
             </div>
       
     </div>
 </div>
</div> </React.Fragment>, document.body
) : null};

export default MenuDelete;