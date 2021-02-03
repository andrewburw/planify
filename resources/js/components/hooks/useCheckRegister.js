import { useState ,useEffect } from 'react';
import useValidate from './useValidationFrom';
/* *************************************************************
|
|
|                      Handle Form file
|
|     
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const useLoginRegister = () => {
  const [inputs, setInputs] = useState(
    {
     username: '',
     email: ''
});
  const {testResults,setValidation} = useValidate();
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    
}
  console.log('test',inputs)

setValidation(inputs)

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    testResults
  };
}

export default useLoginRegister;

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