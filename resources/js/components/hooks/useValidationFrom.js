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

const useValidate = (callback) => {
  //const [inputs, setInputs] = useState({});
 
  const setValidation = (value) => {
    console.log(value)
     valid = 'lol'
  }
  
  return {
   
    valid,
    setValidation
  
  };
}

export default useValidate;