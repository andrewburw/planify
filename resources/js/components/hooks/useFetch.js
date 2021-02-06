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
    const [response, setResponse] = useState(null);
    const [method, setMethod] = useState(null);
    const [fetchFlag, setFetchFlag] = useState(0);
    const [dataToSend, setDataToSend] = useState(null);
    const [error, setError] = useState(null);
    const [adress, setAdress] = useState(null);
    const [isLoading, setLoading] = useState(null);

   useEffect( ()=>{
  // const runFetch = async (adress, method, data) => {
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
             
         fetch(adress, fetchBody).then(response => response.json()

            ).then(data => {
           
                setLoading(false);
                setResponse(data);
                setResponse(false);

                if (data.serverError === true) {
                    setError(data);
                    setLoading(false);
                } else {
    
                 //   setResponse(data);
                 //   setLoading(false);
                }
    
            }).catch(err => {
                //console.error(err.toString())
                setError({error: err.toString()});
                setLoading(false);
    
            });


          
  
  //  };
}, [fetchFlag,method,dataToSend,adress])
 

function runFetch(adress,method,dataToSend) {
    // Set fetchFlag to indirectly trigger the useEffect above
    setFetchFlag(Math.random());
    setDataToSend(dataToSend);
    setMethod(method);
    setAdress(adress);
    setLoading(true);
  }

 
    return { response, error,runFetch,isLoading};
};

export default useFetch;