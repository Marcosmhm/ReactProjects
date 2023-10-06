import { useEffect, useState } from "react"
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

import placeHodlder from '../src/assets/images/poster_placeholder.jpg'
import Loading from "./Loading";

export default function Episodes({ media, selectedSeason = 1, onSeasonChange }) {

  const [seasonData, setSeasonData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const id = media.id

  useEffect(() => {
    let isAborted = false
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `${import.meta.env.VITE_TMDB_KEY}`
      }
    };
    async function getSeason() {
      if (!isAborted) {
        try {
          setIsLoading(true)
          const url = `https://api.themoviedb.org/3/tv/${id}/season/${selectedSeason}?language=en-US`
          const res = await fetch(url, options)
          const data = await res.json()
          setSeasonData(data)
        } catch(e) {
          console.log(e)
        } finally {
          setIsLoading(false)
        }
      }
    }
    getSeason()

    return () => {
      isAborted = true 
    }
  }, [selectedSeason])

  const seasonArray = []
  const SeasonAmmout = media.number_of_seasons
  for (let i = 1; i <= SeasonAmmout; i++) {
    seasonArray.push(i)
  }
  const selectValues = seasonArray.map((season, index) => {
    return <option key={`option-${index}`} value={season}>Season {season}</option>
  })

  const episodesElements = seasonData?.episodes?.map((episode, index) => {
    return (
      <div className="episode-card" key={`episode-${index}-${episode.season_number}`}>
        <div className="episode-still-container">
          <LazyLoadImage
            src={episode.still_path ? `https://image.tmdb.org/t/p/w400/${episode.still_path}` : placeHodlder}
            className="episode-still"
            effect="blur"
            />
        </div>
        <div className="episode-heading">
          <span>E{episode.episode_number}</span>
          <h3>{episode.name}</h3>
        </div>
        <p className="episode-overview">
          {episode.overview}
        </p>
        <span className="episode-date">
          {new Date(episode.air_date).toLocaleDateString('en-gb', {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    )
  })

  return (
    <>
      <select
        className='detail-media-filter'
        id="filter"
        value={selectedSeason}
        onChange={(e) => onSeasonChange(e.target.value)}
      >
        {selectValues}
      </select>
      <>
        {isLoading && <Loading />}
        <LazyLoadComponent>
          <div className="episodes-wrapper">
            {episodesElements}
          </div>
        </LazyLoadComponent>
      </>
    </>
  )
}