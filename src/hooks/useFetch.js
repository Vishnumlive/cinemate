import { useEffect, useState } from "react";

export const useFetch = (apiPath, searchTerm="") => {


    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm }`;

    useEffect(()=>{
        async function fetchMovies(){
            const response = await fetch(url);
            
            const jsonData = await response.json();
            setData(jsonData.results);
            
        }

        fetchMovies();

    },[url]);

  return { data }
}
