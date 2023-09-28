import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'

import Overview from '../../../components/Overview'
import { getSpecificMovie } from '../../../services/api'
import { getHeroMidia as renderHeroMidia } from '../../../utils'
import '../../assets/css/movieDetail.css'

export function loader({ params }) {
  return getSpecificMovie(params.id)
}

export default function MovieDetail() {
  const [active, setActive] = useState('')
  const movie = useLoaderData()
  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000"
  }

  return (
    <>
      <div className="section-container">
        <h3 className='movie-title'>{movie.original_title}</h3>
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
        {active === 'overview' && <Overview />}
        {active === 'videos' && <Overview />}
        {active === 'photos' && <Overview />}
      </div>
    </>
  )
}