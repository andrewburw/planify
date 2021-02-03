
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
  //const [testResults ,setResults] = useState({huj:''});
  let testResults ={}
  const setValidation = (value) => {
    
   for (var prop in value) {
   
  // setResults(testResults => ({...testResults , test: checkFormField.checkField(prop,value[prop]) }))
  testResults [prop] = checkFormField.checkField(prop,value[prop]) 
  }
   //setResults(result)

  //setResults(result)
  // console.log(testResults)
  }
  
  return {
   
    testResults ,
    setValidation
  
  };
}

export default useValidate;