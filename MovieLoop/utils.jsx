import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

import Hero from "./components/Hero"
import Slider from "./components/Slider"
import Stars from "./components/Stars"

export function renderHeroMedia(media) {
  const mediaType = media.original_title ? 'movie' : 'tv'
  const seasonString = media.number_of_seasons > 1 ? "seasons" : "season"
  let url = 'NF'
  media.videos.results.map(video =>  {
    if(video.type === 'Trailer') {
      url = media.videos.results.filter(video => video.type === 'Trailer')[0].key
    } else url= media.videos.results[0]
  })
 
  const mediaELement = (
    <>
        <Hero
          image={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
          title={media.title ? media.title : media.name}
          rating={(media.vote_average / 2).toFixed(2)}
          reviews={media.vote_count}
          airDate={media.first_air_date ? media.first_air_date.slice(0, 4) : media.release_date.slice(0, 4)}
          seasons={
            media.number_of_seasons ? `${media.number_of_seasons} ${seasonString} `
              : `${media.runtime} minutes`}
          overview={media.overview}
          link = {`/${mediaType}/${media.id}`}
          url={url}
        />
    </>
  )
  return (
    <>
      {mediaELement}
    </>
  )
}

export function renderMediaElements(media, title) {
  const mediaElements = media.map(media => (
    <>
      <Link
        to={media.original_title  ? `../movie/${media.id}` : `../tv/${media.id}`}
      >
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${media.poster_path || media.backdrop_path}`}
          className="slider-item"
          effect="blur"
        />
        <div className="slider-item-info">
          <span className="slider-item-title">
            {/* {
              midia.title && midia.title.length > 18 ? `${midia.title.slice(0, 18)} ...` : midia.title
            } */}
            {media.title ? media.title : media.name}
          </span>
          <div className="slider-item-review">
            <Stars
              rating={(media.vote_average?.toFixed(2) / 2)}
            />
            <span className="slider-item-reviews-vote">
              {media.vote_average?.toFixed(2)}
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
        data={mediaElements}
      />
    </>
  )
}

export function renderCast(media, title) {
  const castElements = media.map(media => (
    <>
      <Link
        to=''
      >
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${media.profile_path}`}
          className="slider-item slider-item-cast"
          effect="blur"
        />
        <div className="slider-item-cast-info">
          <span className="slider-item-cast-name">
            {media.title ? media.title : media.name}
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
