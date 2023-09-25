import { getDetails, getTrending } from "../../services/api"
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
    banner: 
      getDetails(midiaType[randomNumber(2)], randomNumber(20)
    )
  })
}

export default function Home() {
  const dataPromise = useLoaderData()
  
  function renderHeroMidia(midia) {
    const seasonString = midia.number_of_seasons > 1 ? "seasons" : "season"
    const midiaELement = (
      <section className="midia-hero-banner">
          <div className="img-container">
            <img src={`https://image.tmdb.org/t/p/original/${midia.backdrop_path}`} className="hero-poster" />
          </div>
          <div className="hero-info">
            <h1>{midia.title ? midia.title : midia.name}</h1>
            <div className="hero-rating">
              <Stars 
                rating={(midia.vote_average / 2).toFixed(2)} 
                reviews={midia.vote_count}
                />
            </div>
            <div className="hero-midia-info">
              <span className="hero-midia-date">
                {midia.first_air_date ? midia.first_air_date.slice(0, 4) : midia.release_date.slice(0, 4)}
              </span>
              <span>
                {midia.number_of_seasons ? `${midia.number_of_seasons} ${seasonString} `
                : `${midia.runtime} minutes` }
              </span>
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
      <>
        <h1>{show.original_name}</h1>
      </>
    ))
    return (
      <>
        <h2>Trending TV Shows</h2>
        {tvShowElements}
      </> 
    )
  }

  function renderMovies(movies) {
    const movieElements = movies.map(movie => (  
      <>
        <h1>{movie.original_title}</h1>
      </>
      ))
      return (
        <>
        <h2>Trending Movies </h2>
        {movieElements}
      </> 
    )
  }

  return (
    <>
        <Suspense fallback={<h2>Loading <Loading /> </h2>}>
              <Await resolve={dataPromise.banner}>
                {renderHeroMidia}
              </Await>
          <section className="trending-midia-section">
            <Await resolve={dataPromise.movies}>
              {renderMovies}
            </Await>
            <Await resolve={dataPromise.tv}>
              {renderTvShows}
            </Await>
          </section>
        </Suspense>
    </>
  )
}

