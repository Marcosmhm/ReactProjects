import { useState } from "react"
import { useLoaderData, useParams } from 'react-router-dom'

import Overview from '../../../components/Overview'
import Photos from '../../../components/Photos'
import Videos from '../../../components/Videos'
import '../../assets/css/movieDetail.css'
import { getSpecifiShow } from '../../../services/api'
import { renderHeroMedia, renderMediaElements } from '../../../utils'

export function loader({ params }) {
  return getSpecifiShow(params.id)
}

export default function TvDetail() {
  const [active, setActive] = useState('overview')

  const [selectedFilter, setSelectedFilter] = useState('All')

  const tv = useLoaderData()
  console.log(tv)

  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000"
  }

  const handleFilterChange = filter => setSelectedFilter(filter);

  return (
    <>
      <h3 className='detail-title'>{tv.original_title}</h3>
      <div className="section-container">
        {renderHeroMedia(tv)}
        <div className="button-wrapper">
          <button style={active === 'overview' ? activeStyles : []}
            onClick={() => setActive('overview')}
          >
            Overview
          </button>
          <button style={active === 'episodes' ? activeStyles : []}
            onClick={() => setActive('episodes')}
          >
            Episodes
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
        <section className='detail-section'>
          {active === 'overview' && Overview(tv)}
          {active === 'videos' && Videos(tv.videos.results, selectedFilter, handleFilterChange)}
          {active === 'photos' && Photos(tv.images)}
          <div className="detail-recommendations">
            {renderMediaElements(tv.recommendations.results, 'More Like This')}
          </div>
        </section>
      </div>
    </>
  )
}