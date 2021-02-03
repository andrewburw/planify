
import checkFormField from './custom_modules/checkFields';
/* *************************************************************
|
|
|                      Chek Input fields for valid data file
|
|     * Controller
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const useValidate = () => {

  let testResults = {}
  const setValidation = (value) => {

    for (var prop in value) {
    
    

        // third argument pass whole object of values
        // this is for check both paswords
        testResults[prop] = checkFormField.checkField(prop, value[prop],value); 
   
    }
  }

  return {

    testResults,
    setValidation

  };
}

export default useValidate;