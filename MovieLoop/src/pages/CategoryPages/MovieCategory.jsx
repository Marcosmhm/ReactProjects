import { useLoaderData, useParams } from "react-router-dom"
import { getMovies } from "../../../services/api"
import { useState, useEffect } from "react";
import handleScroll from "../../../components/InfineScroll";
import Loading from "../../../components/Loading";

let query = ''
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
  query = match ? match.shortQuery : null;
  return getMovies(query)
}

export default function MovieCategory() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState(useLoaderData())
  console.log('loader', data)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovies = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const movieData = await getMovies('popular', page)
      console.log('fetch', movieData)
      setData(prevData => [...prevData, ...movieData])
      setPage(prevPage => prevPage + 1)
    } catch (e) {
      console.log(e)
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect (() => {
    fetchMovies()
  }, [])

  
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchMovies();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]); // Re-attach event listener when isLoading changes

  return (
    <>
      <section className="section-container">
      <div>
        <ul>
          {data.map(item =>  item.title)}
        </ul>
      </div>
      {isLoading && <Loading />}
      {error && <p>Error: {error.message}</p>}
      </section>
    </>
  )
}