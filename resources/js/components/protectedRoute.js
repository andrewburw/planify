
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    

  return  <Route {...rest} render={(props) => (

     true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} /> 
   
}

export default PrivateRoute;

