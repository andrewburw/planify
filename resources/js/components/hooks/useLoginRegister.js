import { useState } from 'react';
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

const useLoginRegister = (callback) => {
  const [inputs, setInputs] = useState({});
  const {valid,setValidation} = useValidate();
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  
    setValidation( event.target.value)


}
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useLoginRegister;