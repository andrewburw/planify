import React from 'react';
import ReactDOM from 'react-dom';

/* *************************************************************
|
|
|                     Menu small calendar
|
|       *  Two menu values 1)menu for adding idle time 
|                          2)menu for adding busy time
|     
|       My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



const MenuSmallCalendar = ({ isShowing, hide ,position,menu}) => {
  
  







// ******* CHANGE MENU UI


 let menuBusy =  <ul>
                    <li><i className="fas fa-home icon"></i>Change</li>
                    <li><i className="fas fa-underline icon"></i>Delete</li>
                 </ul>;


let menuFree =  <ul>
<li><i className="fas fa-home icon"></i>Add</li>
</ul>;
  
  return isShowing ? ReactDOM.createPortal(

 <React.Fragment><div className="small__menu" style={{top: `${position.y}px`,left:`${position.x}px`}}>
<div className="small__menu-container">
  <div className="small__menu-header">
    <h3 className="small__menu-h-h">{menu === 'free'? 'Menu: Add':'Menu: Change'}</h3>
  </div>
  <div className="small__menu-body">
    {menu === 'free'? menuFree: menuBusy}
  </div>
</div>
</div> </React.Fragment>, document.body
) : null};

export default MenuSmallCalendar;