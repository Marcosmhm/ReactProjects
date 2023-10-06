import { Suspense, lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

import placeHolder from './src/assets/images/poster_placeholder.jpg'
const Hero = lazy(() => import("./components/Hero"));
const Slider = lazy(() => import("./components/Slider"))
import Stars from "./components/Stars"
import Loading from "./components/Loading"
import { getUserFavorites, addToFavorite } from "./services/api";
import FavoriteMedia from "./components/FavoriteMedia";

export function renderHeroMedia(media) {
  const mediaType = media.original_title ? 'movie' : 'tv'
  const seasonString = media.number_of_seasons > 1 ? "seasons" : "season"
  let url = 'NF'
  media.videos.results.map(video => {
    if (video.type === 'Trailer') {
      url = media.videos.results.filter(video => video.type === 'Trailer')[0].key
    } else url = media.videos.results[0].key
  })

  const mediaELement = (
    <>
      <Suspense fallback={<Loading />}>
        <Hero
          image={`https://image.tmdb.org/t/p/w1280/${media.backdrop_path}`}
          title={media.title ? media.title : media.name}
          rating={(media.vote_average / 2).toFixed(2)}
          reviews={media.vote_count}
          airDate={media.first_air_date ? media.first_air_date.slice(0, 4) : media.release_date?.slice(0, 4)}
          seasons={
            media.number_of_seasons ? `${media.number_of_seasons} ${seasonString} `
              : `${media.runtime} minutes`}
          overview={media.overview}
          link={`/${mediaType}/${media.id}`}
          url={url}
        />
      </Suspense>
    </>
  )
  return (
    <>
      {mediaELement}
    </>
  )
}

export function renderMediaElements(media, title) {
  let [getUserFavoriteData, setGetUserFavoriteData] = useState([])
  let type = media[0]?.title ? `movie` : `tv`

  const getFavorites = async () => {
    const results = await getUserFavorites(localStorage.getItem('sessionId'), type);
    setGetUserFavoriteData([...results.map(media => media.id)]);
  }

  const handleFavoriteClick = async (type, mediaId, bool) => {
    await addToFavorite(type, mediaId, localStorage.getItem('sessionId'), bool);
    await getFavorites();
  }

  useEffect(() => {
    getFavorites()
  }, [])

  const mediaElements = media.map((media, index) => (
    <>
      {<FavoriteMedia
        data={media}
        getUserData={getUserFavoriteData}
        handleClick={handleFavoriteClick}
        className={'add-to-favorites-button'}
        type={media.title ? `movie` : `tv`}
        key={index} />}
      <Link
        key={`${media.id}-${index}`}
        to={media.original_title ? `../movie/${media.id}` : `../tv/${media.id}`}
      >
        <LazyLoadImage
          src={media.poster_path ? `https://image.tmdb.org/t/p/w342/${media.poster_path}` : placeHolder}
          className="slider-item"
          effect="blur"
        />
        <div className="slider-item-info">
          <span className="slider-item-title">
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
        type={type}
        link={title?.split(' ').join('_').toLowerCase()}
      />
    </>
  )
}

export function renderCast(media, title) {
  const castElements = media.map((media, index) => (
    <>
      <Link
        key={`cast-${index}`}
        to={`/person/${media.id}`}
      >
        <LazyLoadImage
          src={media.profile_path ? `https://image.tmdb.org/t/p/h632/${media.profile_path}` : placeHolder}
          className="slider-item slider-item-cast"
          effect="blur"
        />
        <div className="slider-item-cast-info">
          <span className="slider-item-cast-name">
            {media.name}
          </span>
          <span className="slider-item-cast-character">
            {media.character}
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
