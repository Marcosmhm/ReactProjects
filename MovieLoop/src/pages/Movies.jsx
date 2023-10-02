import { defer, useLoaderData, Await, Link } from "react-router-dom"
import { getDetails, getMovies } from "../../services/api"
import { Suspense } from "react"

import Loading from "../../components/Loading"
import { renderHeroMedia, renderMediaElements as getMovieElements } from "../../utils"

const randomNumber = (max) => Math.floor(Math.random() * max)

export function loader() {
  return defer({ 
    banner : getDetails('movie', randomNumber(20)),
    popular: getMovies('trending'),
    topRated: getMovies('top_rated'),
    upComing: getMovies('upcoming'),
  })
}

export default function Movies() {

  const dataPromise = useLoaderData()

  function renderTrending(movies) {
      return (
        <>
         {getMovieElements(movies, 'Popular Movies')}
      </> 
    )
  }

  function renderTopRated(movies) {
      return (
        <>
          {getMovieElements(movies, 'Top Rated Movies')}
      </> 
    )
  }

  function renderUpcoming(movies) {
    return (
      <>
        {getMovieElements(movies, 'Upcoming Movies')}
      </> 
    )
  }

  return (
    <>
      <Suspense fallback={<h2>Loading <Loading /> </h2>}>
        <div className="section-container">
          <Await resolve={dataPromise.banner}>
            {renderHeroMedia}
          </Await>
          <section className="media-section">
            <Await resolve={dataPromise.popular}>
              {renderTrending}
            </Await>
            <Await resolve={dataPromise.topRated}>
              {renderTopRated}
            </Await>
            <Await resolve={dataPromise.upComing}>
              {renderUpcoming}
            </Await>
          </section>
        </div>
      </Suspense>
    </>
  )
}