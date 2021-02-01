import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Aside from './asideMenu';
import Header from './header';
import MonthMainApp from './calendar_month/mainAppMonth';
import WeekMainApp from './calendar_week/mainAppWeek';
import WeekMainGant from './calendar_gant/mainAppGant';
import DashBoard from './dash_board/dashBoard';

// <Route  exact path="/dashboard" component={MonthMainApp} />
const  MainApp = () => {
    return (
      <div className="grid-container">
      <Header />
      <Aside />
      <div className="main_co">
        <div className="container">
        <div className="main_co__month-name">
        
        <h1> <span className="main_co__month-left"> &#10092; </span> September <span className="main_co__month-right"> &#10093; </span></h1>
        
    </div> 
   
    <Switch>
    <Route  exact path="/dashboard" component={DashBoard} />
      <Route path="/dashboard/month" component={MonthMainApp} />
      <Route path="/dashboard/week" component={WeekMainApp} />
      <Route path="/dashboard/gant" component={WeekMainGant} />
    </Switch>
   
    </div>
    </div>
    </div>
    );
}

export default MainApp;