import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {

  const [queryString] = useSearchParams();
  const searchTerm = queryString.get("q");
  
  const {data : movies } = useFetch(apiPath, searchTerm);

  const pageTitle = useTitle(`Search result for -  ${ searchTerm }`);

  return (
    <main>
      <section class="max-w-7xl mx-auto py-7">
        <p class="text-3xl text-gray-700 dark:text-white">
          { (movies.length > 0 ) ? (` Result for '${searchTerm}'` ) : (` No Result found for '${searchTerm}'`)}
           </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            { movies && movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
            
            }

          </div>
      </section>
    </main>
  )
}
