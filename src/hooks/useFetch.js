import { useEffect, useState } from "react";

export const useFetch = (apiPath, searchTerm="") => {

    const controller = new AbortController();

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm }`;

    useEffect(()=>{
        async function fetchMovies(){
            const response = await fetch(url, {signal : controller.signal});
            
            const jsonData = await response.json();
            setData(jsonData.results);
            
        }

        fetchMovies();

        // return () => controller.abort();
    },[url]);

  return { data }
}
