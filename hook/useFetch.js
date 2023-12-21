import { useState, useEffect } from 'react';
import  axios  from 'axios';

const useFetch = (endpoint, query) => {
    const[data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'X-RapidAPI-Key': '734e59f9a3mshadbd6f86755f406p1236c0jsn450add4d4298',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch(error){
            setError(error);
            alert(`There is an error ${error}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}
}

export default useFetch;