/* *************************************************************
|
|
|                      Check fields files
|
|          * In this files is form fields tests 
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
let validate = {

  checkField: function (field, val, val2) {
    // *********** STARTER FUNCTION ******************
    // This function choose what field to check,
    //  then takes this object function to check field.
    //    TRUE = has errors in field
    switch (field) {
      case 'username':
        return this.name(val);

      case 'email':
        return this.email(val);

      case 'password1':
        return this.password1(val);

      case 'password2':
        return this.password2(val, val2);

      default:
        console.warn('Error in checkField -> ' + field + ' not found!')
    }
  },

  name: function (value) {

    return !/^[a-zA-Z0-9.\-_$@*!]{3,30}$/.test(value);

  },
  email: function (value) {

    return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

  },
  password1: function (value) {
    // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    return true;

  },
  password2: function (value1, obj) {


    if (obj.password1 === obj.password2) {
      return false;
    }


    return true;

  }

}


export default validate;

