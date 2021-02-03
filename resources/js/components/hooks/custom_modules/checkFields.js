/* *************************************************************
|
|
|                      Check fields files
|
|          * In this files is check form fields tests
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
let validate = {

    checkField : function(field,val){
       // *********** STARTER FUNCTION ******************
       // This function choose what field to check,
       //  then takes this object function to check field.
       //    TRUE = has errors in field
        switch(field) {
            case 'username':
              return this.name(val)
            
            case 'email':
              return this.email(val)
           
            default:
             console.warn('Error in checkField -> Field test not found!')
          }
    },
 
    name: function(value){
     
      return !/^[a-zA-Z0-9.\-_$@*!]{3,30}$/.test(value);
        
    },
    email: function(value){

      return true;

    }

}


export default validate;

