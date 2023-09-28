import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'

import Overview from '../../../components/Overview'
import Photos from '../../../components/Photos'
import Videos from '../../../components/Videos'
import { getSpecificMovie } from '../../../services/api'
import { getHeroMidia as renderHeroMidia, getMidiaElements } from '../../../utils'
import '../../assets/css/movieDetail.css'

export function loader({ params }) {
  return getSpecificMovie(params.id)
}

export default function MovieDetail() {
  const [active, setActive] = useState('overview')
  const movie = useLoaderData()
  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000"
  }

  return (
    <>
      <div className="section-container">
        
        {renderHeroMidia(movie)}
        <div className="button-wrapper">
          <button style={active === 'overview' ? activeStyles : []}
            onClick={() => setActive('overview')}
          >
            Overview
          </button>
          <button style={active === 'videos' ? activeStyles : []}
            onClick={() => setActive('videos')}
          >
            Videos
          </button>
          <button style={active === 'photos' ? activeStyles : []}
            onClick={() => setActive('photos')}
          >
            Photos
          </button>
        </div>
        {active === 'overview' && Overview(movie)}
        {active === 'videos' && Videos(movie.videos)}
        {active === 'photos' && Photos(movie.images)}
        <div className="detail-recommendations">
          {getMidiaElements(movie.recommendations.results, 'More Like This')}
        </div>
      </div>
    </>
  )
}