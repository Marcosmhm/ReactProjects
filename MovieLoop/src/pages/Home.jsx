import { getTrending } from "../../services/api"
import { defer, useLoaderData, Await } from "react-router-dom"
import { Suspense } from "react"

export function loader() {
  return defer({ 
    movies : getTrending('movie'),
    tv: getTrending('tv'),
  })
}


export default function Home() {
  const dataPromise = useLoaderData()

  function renderTvShows(tv) {
    const tvShowElements = tv.map(show => (
      <h1>{show.original_name}</h1>
    ))
    return (
      <>
        {tvShowElements}
      </> 
    )
  }

  function renderMovies(movies) {
    const movieElements = movies.map(movie => (  
      <h1>{movie.original_title}</h1>
    ))
    return (
      <>
        {movieElements}
      </> 
    )
  }

  return (
    <>
      <div>
      <Suspense fallback={<h2>Loading Movies...</h2>}>
          <Await resolve={dataPromise.movies}>
            {renderMovies}
          </Await>
        </Suspense>
      </div>
      <div>
      <Suspense fallback={<h2>Loading shows...</h2>}>
          <Await resolve={dataPromise.tv}>
            {renderTvShows}
          </Await>
        </Suspense>
      </div>
    </>
  )
}