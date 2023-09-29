import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

import Hero from "./components/Hero"
import Slider from "./components/Slider"
import Stars from "./components/Stars"

export function renderHeroMidia(midia) {
  const midiaType = midia.original_title ? 'movie' : 'tv'
  const seasonString = midia.number_of_seasons > 1 ? "seasons" : "season"
  const midiaELement = (
    <>
      <Link to={`/${midiaType}/${midia.id}`}>
        <Hero
          image={`https://image.tmdb.org/t/p/original/${midia.backdrop_path}`}
          title={midia.title ? midia.title : midia.name}
          rating={(midia.vote_average / 2).toFixed(2)}
          reviews={midia.vote_count}
          airDate={midia.first_air_date ? midia.first_air_date.slice(0, 4) : midia.release_date.slice(0, 4)}
          seasons={
            midia.number_of_seasons ? `${midia.number_of_seasons} ${seasonString} `
              : `${midia.runtime} minutes`}
          overview={midia.overview}
        />
      </Link>
    </>
  )
  return (
    <>
      {midiaELement}
    </>
  )
}

export function renderMidiaElements(midia, title) {
  const midiaElements = midia.map(midia => (
    <>
      <Link
        to={midia.title ? `../movie/${midia.id}` : `../tv/${midia.id}`}
      >
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${midia.poster_path || midia.backdrop_path}`}
          className="slider-item"
          effect="blur"
        />
        <div className="slider-item-info">
          <span className="slider-item-title">
            {/* {
              midia.title && midia.title.length > 18 ? `${midia.title.slice(0, 18)} ...` : midia.title
            } */}
            {midia.title ? midia.title : midia.name}
          </span>
          <div className="slider-item-review">
            <Stars
              rating={(midia.vote_average?.toFixed(2) / 2)}
            />
            <span className="slider-item-reviews-vote">
              {midia.vote_average?.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </>
  ))
  return (
    <>
      <Slider
        title={title}
        data={midiaElements}
      />
    </>
  )
}

export function renderCast(midia, title) {
  const castElements = midia.map(midia => (
    <>
      <Link
        to=''
      >
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${midia.profile_path}`}
          className="slider-item slider-item-cast"
          effect="blur"
        />
        <div className="slider-item-cast-info">
          <span className="slider-item-cast-name">
            {midia.title ? midia.title : midia.name}
          </span>
        </div>
      </Link>
    </>
  ))
  return (
    <>
      <div className="cast-slider">
        <Slider
          title={title}
          data={castElements}
        />
      </div>
    </>
  )
}
