import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

import Hero from "./components/Hero"
import Slider from "./components/Slider"
import Stars from "./components/Stars"

export function getHeroMidia( midia ) {
  const seasonString = midia.number_of_seasons > 1 ? "seasons" : "season"
  const midiaELement = (  
    <>
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
    </>
  )
  return (
    <>
      {midiaELement}
    </>
  )
}

export function getMidiaElements(midia, title) {
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
              rating={(midia.vote_average.toFixed(2) / 2)}
              />
            <span className="slider-item-reviews-vote">
              {midia.vote_average.toFixed(2)}
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
