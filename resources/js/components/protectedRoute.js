
import { Redirect, Route } from 'react-router-dom';
import React,{useEffect,useContext} from 'react';
import useFetch from './hooks/useFetch';
import {UserContext,AvatarContext} from './mainContext';
/* *************************************************************
|
|
|                      Protected route JS file
|
|       * Protected route checks if user is registred if not redirects back to main page.
|      
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



const PrivateRoute = ({ component: Component, ...rest }) => {
  const {runFetch,response} = useFetch();
  const {setUserName} = useContext(UserContext);
  const {setAvatar} = useContext(AvatarContext);

useEffect(()=>{


  runFetch('/api/login/check', 'get');
 

},[])
useEffect(()=>{

  setUserName(response.user); // Global state => used in header where logout menu
  setAvatar(response.avatar); // Global state => used in header where logout menu
},[response])


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

