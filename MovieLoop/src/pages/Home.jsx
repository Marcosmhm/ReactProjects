import { getTrending } from "../../services/api"
import { defer, useLoaderData, Await } from "react-router-dom"
import { Suspense } from "react"

import Loading from "../../components/Loading"
import Stars from "../../components/Stars"
import "../assets/css/home.css"


const randomNumber = (max) => Math.floor(Math.random() * max)
const midiaType = ['tv', 'movie']

export function loader() {
  return defer({ 
    movies : getTrending('movie'),
    tv: getTrending('tv'),
    banner: getTrending(midiaType[randomNumber(2)], randomNumber(20))
  })
}

export default function Home() {
  const dataPromise = useLoaderData()

  function renderHeroMidia(midia) {
    const midiaELement = (
      <section className="midia-hero-banner">
          <div className="img-container">
            <img src={`https://image.tmdb.org/t/p/original/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg`} className="banner-midia-poster" />
          </div>
          <div className="hero-info">
            <h1>{midia.original_title ? midia.original_title : midia.original_name}</h1>
            <div className="herp-rating">
              <Stars 
                rating={midia.vote_average.toFixed(2)/2} 
                reviews={midia.vote_count}
                />
              <h3>{midia.vote_average.toFixed(2)}</h3>
            </div>
          </div>
      </section>
    )
    return (
      <>
          {midiaELement}
      </>
    )
  }

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
      <section className="trending-media-section">
        <Suspense fallback={<h2>Loading <Loading /> </h2>}>
            <Await resolve={dataPromise.banner}>
              {renderHeroMidia}
            </Await>
            <Await resolve={dataPromise.movies}>
              {renderMovies}
            </Await>
            <Await resolve={dataPromise.tv}>
              {renderTvShows}
            </Await>
        </Suspense>
      </section>
    </>
  )
}

