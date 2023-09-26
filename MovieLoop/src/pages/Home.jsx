import { getDetails, getTrending } from "../../services/api"
import { defer, useLoaderData, Await } from "react-router-dom"
import { Suspense } from "react"

import Slider from "../../components/Slider"
import Loading from "../../components/Loading"
import Stars from "../../components/Stars"
import Hero from "../../components/Hero"
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
      <>
          <Hero 
            image={`https://image.tmdb.org/t/p/original/${midia.backdrop_path}`}
            title={midia.title ? midia.title : midia.name}
            rating={(midia.vote_average / 2).toFixed(2)}
            reviews={midia.vote_count}
            airDate={midia.first_air_date ? midia.first_air_date.slice(0, 4) : midia.release_date.slice(0, 4)}
            seasons={midia.number_of_seasons ? `${midia.number_of_seasons} ${seasonString} `
            : `${midia.runtime} minutes`}
          /> 
      </>
    )
    return (
      <>
          {midiaELement}
      </>
    )
  }

  function renderMovies(movies) {
    const movieElements = movies.map(movie => (  
      <>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="slider-item" />
      </>
      ))
      return (
        <>
          <h2>Trending Movies </h2>
          <Slider
            data={movieElements}
          />
      </> 
    )
  }

  function renderTvShows(tv) {
    const tvShowElements = tv.map(show => (
      <>
        <img src={`https://image.tmdb.org/t/p/original/${show.poster_path}`} className="slider-item" />
      </>
    ))
    return (
      <>
        <h2>Trending TV Shows</h2>
        <Slider
          data={tvShowElements} 
          className="slider"
        />
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

