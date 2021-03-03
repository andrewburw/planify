
import { Redirect, Route } from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import useFetch from './hooks/useFetch';




const PrivateRoute = ({ component: Component, ...rest }) => {
  const {runFetch,response} = useFetch();



useEffect(()=>{


  runFetch('/api/login/check', 'get');
 

},[])

    // little crutches. 
   let render = false;
    if (response == 'null') {
     return null;

    } else {
     
        if (response.errorStatus === true) {
       
          render = false;
          
        } else {

          render = true;
        }


     
    }

  return   <Route {...rest} render={(props) => (

     render
        ? <Component {...props} />
        : <Redirect to='/' />
    )} /> 
   
}

export default PrivateRoute;

