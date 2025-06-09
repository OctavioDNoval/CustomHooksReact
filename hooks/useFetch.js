import { useState } from "react"

export const useFetch = () => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const {data, isLoading, error} = state;

    const fetchData = async(url, method, bodyData= null) =>{
        if(!url){
            return
        }else{
            try{

                const options ={
                    method:method,
                    heders: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: method == "GET" || method == "DELETE" ? null : JSON.stringify(bodyData)
                }

                const res = await fetch(url,options);
                const data = await res.json();
                setState({
                    data: data,
                    isLoading: false,
                    error: null
                });
            }catch(e){
                console.log(e);
                setState({
                    data: null,
                    isLoading : false,
                    error: e
                });
            }
        }
    }

    return {
        data,
        isLoading,
        error,
        fetchData
  }
}
