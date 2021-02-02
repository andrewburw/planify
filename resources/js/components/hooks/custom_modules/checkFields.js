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
       //  then takes this object function to check.
        switch(field) {
            case 'username':
              this.name(val)
              break;
            case 'email':
              // code block
              break;
            default:
             console.warn('Error in checkField -> Field test not found!')
          }
    },
 
    name: function(value){

       console.log("name",value)

    }

}


export default validate;