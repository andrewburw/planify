import { useEffect, useState } from 'react';
/* *************************************************************
|
|
|                     Fetch hook file.
|
|     * Universal Hook for fetching data
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
const useFetch = () => {
    const [response, setResponse] = useState({});
    const [method, setMethod] = useState(0);
    const [fetchFlag, setFetchFlag] = useState(0);
    const [dataToSend, setDataToSend] = useState(0);

   useEffect( ()=>{
  //  const runFetch = async (adress, method, data) => {
        if (fetchFlag == 0) {
            // Run only after triggerFetch is called 
            return;
          }
        let methodWithBody = {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dataToSend)
        }

        let methodNoBody = {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }

        let fetchBody = method.toLowerCase() === 'get' ? methodNoBody : methodWithBody;
     
         fetch('https://jsonplaceholder.typicode.com/todos/1', fetchBody).then(response => response.json()

            ).then(data => {
              
                if (data.serverError === true) {
    
                } else {
    
                       setResponse(data);
                }
    
            }).catch(err => {
                console.error(err.toString())
    
    
            });


          
  
  //  };
}, [fetchFlag,method,dataToSend])

function runFetch(adress,method,dataToSend) {
    // Set fetchFlag to indirectly trigger the useEffect above
    setFetchFlag(Math.random());
    setDataToSend(dataToSend)
    setMethod(method)
  }

  //console.log(response)
    return { response, runFetch};
};

export default useFetch;