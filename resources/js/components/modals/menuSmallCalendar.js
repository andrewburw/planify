
import React from 'react';

import ReactDOM from 'react-dom';





const MenuSmallCalendar = ({ isShowing, hide ,position}) => isShowing ? ReactDOM.createPortal(


      


 <React.Fragment><div className="small__menu" style={{top: `${position.y-300}px`,left:`${position.x}px`}}>
<div className="small__menu-container">
  <div className="small__menu-header">
    <h3 className="small__menu-h-h">Menu IU </h3>
  </div>
  <div className="small__menu-body">
    <ul>
      <li><i className="fas fa-home icon"></i> Home</li>
      <li><i className="fas fa-underline icon"></i> Tipography</li>
      <li><i className="fas fa-boxes icon"></i> Widgets</li>
      <li><i className="fas fa-table icon"></i> Tables</li>
      <li><i className="fab fa-wpforms icon"></i> Forms
         </li>
      <li><i className="fas fa-chart-pie icon"></i> Charts</li>
    </ul>
  </div>
</div>
</div> </React.Fragment>, document.body
) : null;

export default MenuSmallCalendar;