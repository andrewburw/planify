/*
{
  "values": {
    "name": "Mary Poppins",
    "email": "mary@example.com",
    "password": "1234",
    "plan": "free",
  },
  "validity": {
    "name": true,
    "email": true,
    "password": false,
    "plan": true,
  },
  "touched": {
    "name": true,
    "email": true,
    "password": true,
    "plan": true,
  }
}
*/

import { useState } from 'react';

import checkFormField from './custom_modules/checkFields';
/* *************************************************************
|
|
|                      Chek Input fields for valid data file
|
|     
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const useValidate = () => {
  //const [inputs, setInputs] = useState({});
  let valid = null;
  const setValidation = (field,value) => {
   
    checkFormField.checkField(field,value) 
    
  }
  
  return {
   
    valid,
    setValidation
  
  };
}

export default useValidate;