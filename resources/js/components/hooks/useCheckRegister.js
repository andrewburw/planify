import { useState} from 'react';
import useValidate from './useValidationFrom';
import useFetch from './useFetch';
/* *************************************************************
|
|
|                      Handle Form file
|
|      * Absolute usless file ;)
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const useLoginRegister = () => {
  const [inputs, setInputs] = useState(
    {
      username: '',
      email: '',
      password1: '',
      password2: ''
    });
  const [touched, setTouch] = useState(
    {
      username: false,
      email: false,
      password1: false,
      password2: false
    });

  const { testResults, setValidation } = useValidate();
  const { response, runFetch,error} = useFetch();


  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    let fetchData = {
      name: inputs.username,
      email: inputs.email,
      password: inputs.password1,
      password_confirmation: inputs.password2

  }
    runFetch('/api/auth/register','post',fetchData);
  
  
  }

 
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    setTouch(inputs => ({ ...inputs, [event.target.name]: true }));

  }


  setValidation(inputs) // Outside hook, for cotrol fields and testing.

  /*  
  
      "testResults: is returned object to the register page with results:
      If field pass tests or not (true/false) 
      THEN: if one of field has FALSE value button(register) is disabled.

  */
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    testResults, 
    touched, 
    response,
    error
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