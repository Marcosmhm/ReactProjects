import { useLoaderData } from "react-router-dom"
import { getMovies } from "../../../services/api"
import { useState } from "react";

export function loader({ params }) {
  const queryArray = [
    {
      fullQuery: 'popular_movies',
      shortQuery: 'trending',
    },
    {
      fullQuery: 'top_rated_movies',
      shortQuery: 'top_rated',
    },
    {
      fullQuery: 'upcoming_movies',
      shortQuery: 'upcoming',
    },
  ]

  const match = queryArray.find((query) => query.fullQuery === params.query);
  const query = match ? match.shortQuery : null;
  return getMovies(query)
  
}

export default function MovieCategory() {
  const [page, setPage] = useState(1)
  const data = useLoaderData()
  console.log(data)
  return (
    <>

    </>
  )
}