import { useEffect, useState } from "react";
import axios from "axios";

const UseCustomFetch = async(url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get(url)
      .then((response) =>setData(response.data))
      .catch(error=>setError(error))
    }, [url]);
    
    return {data, isLoading:false, error};
};
export default UseCustomFetch;
