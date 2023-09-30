import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'

import Overview from '../../../components/Overview'
import Photos from '../../../components/Photos'
import Videos from '../../../components/Videos'
import { getSpecificMovie } from '../../../services/api'
import { renderHeroMedia, renderMediaElements } from '../../../utils'
import '../../assets/css/movieDetail.css'

export function loader({ params }) {
  return getSpecificMovie(params.id)
}

export default function MovieDetail() {
  const [active, setActive] = useState('overview')

  const [selectedFilter, setSelectedFilter] = useState('All')

  const movie = useLoaderData()

  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000"
  }

  const handleFilterChange = filter => setSelectedFilter(filter);

  return (
    <>
      <h3 className='detail-title'>{movie.original_title}</h3>
      <div className="section-container">
        {renderHeroMedia(movie)}
        <div className="button-wrapper">
          <button className={`detail-button ${active === 'episodes' ? 'button-border' : ''}`} 
            style={active === 'overview' ? activeStyles : []}
            onClick={() => setActive('overview')}
          >
            Overview
          </button>
          <button className={`detail-button ${active === 'episodes' ? 'button-border' : ''}`} 
            style={active === 'videos' ? activeStyles : []}
            onClick={() => setActive('videos')}
          >
            Videos
          </button>
          <button className={`detail-button ${active === 'episodes' ? 'button-border' : ''}`}
            style={active === 'photos' ? activeStyles : []}
            onClick={() => setActive('photos')}
          >
            Photos
          </button>
        </div>
        <section className='detail-section'>
          {active === 'overview' && Overview(movie)}
          {active === 'videos' && Videos(movie.videos.results, selectedFilter, handleFilterChange)}
          {active === 'photos' && Photos(movie.images)}
          <div className="detail-recommendations">
            {renderMediaElements(movie.recommendations.results, 'More Like This')}
          </div>
        </section>
      </div>
    </>
  )
}