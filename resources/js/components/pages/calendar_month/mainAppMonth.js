
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const  MainApp = () => {

  console.log('test')
    return (
         
        <div className="calendar_app">
      <div className="calendar_container">
        <div className="calendar__weekday-name">MON</div>
        <div className="calendar__weekday-name">TUE</div>
        <div className="calendar__weekday-name">WED  </div>  
        <div className="calendar__weekday-name">THU</div>
        <div className="calendar__weekday-name">FRI</div>
        <div className="calendar__weekday-name">SAT</div>  
        <div className="calendar__weekday-name">SUN</div>
        <div className="calendar__weekday">1</div>
        <div className="calendar__weekday">2</div>
        <div className="calendar__weekday">3</div>  
        <div className="calendar__weekday">4</div>
        <div className="calendar__weekday">5</div>
        <div className="calendar__weekday">6</div>  
        <div className="calendar__weekday-weekend">7</div>
        <div className="calendar__weekday">8</div>
        <div className="calendar__weekday">9</div> 
        <div className="calendar__weekday">10</div>
        <div className="calendar__weekday">11</div>
        <div className="calendar__weekday">12</div> 
        <div className="calendar__weekday">13</div>
        <div className="calendar__weekday-weekend">14</div>
        <div className="calendar__weekday">15</div> 
        <div className="calendar__weekday">16</div>
        <div className="calendar__weekday">17</div>
        <div className="calendar__weekday">18</div>
        <div className="calendar__weekday">19</div> 
        <div className="calendar__weekday today">20</div> 
        <div className="calendar__weekday-weekend">21</div> 
        <div className="calendar__weekday">22</div> 
        <div className="calendar__weekday">23</div> 
        <div className="calendar__weekday">24</div> 
        <div className="calendar__weekday">25</div> 
        <div className="calendar__weekday">26</div> 
        <div className="calendar__weekday">27</div> 
        <div className="calendar__weekday-weekend">28</div> 
        <div className="calendar__weekday">29</div> 
        <div className="calendar__weekday">30</div>
       
      </div>
      


    </div>
    );
}

export default MainApp ;