import { useLoaderData, useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Overview = lazy(() => import('../../../components/MediaOverview'))
const Videos = lazy(() => import('../../../components/Videos'))
const Photos = lazy(() => import('../../../components/Photos'))

import Loading from '../../../components/Loading'

import { getSpecificMovie } from '../../../services/api'
import { renderHeroMedia, renderMediaElements } from '../../../utils'


export function loader({ params }) {
  return getSpecificMovie(params.id)
}

export default function MovieDetail() {
  const  navigation = useNavigate()
  const [active, setActive] = useState('overview')

  const [selectedFilter, setSelectedFilter] = useState('All')

  const movie = useLoaderData()

  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000"
  }

  const handleFilterChange = filter => setSelectedFilter(filter);

  const moreLikeThis = movie.recommendations.results.length >= 1 ? renderMediaElements(movie.recommendations.results) : ``
  return (
    <>
      <div className='detail-title'>
        <span className="title-back-button">
            {<BiArrowBack size={22} onClick={() => navigation(-1)} />}
        </span>
        {movie.original_title}
      </div>
      <div className="section-container">
        {renderHeroMedia(movie)}
        <div className="button-wrapper">
          <button className={`detail-button ${active === 'overview' ? 'button-border' : ''}`}
            style={active === 'overview' ? activeStyles : []}
            onClick={() => setActive('overview')}
          >
            Overview
          </button>
          {movie.videos.results.length >= 1 ?
            <button className={`detail-button ${active === 'videos' ? 'button-border' : ''}`}
              style={active === 'videos' ? activeStyles : []}
              onClick={() => setActive('videos')}
            >
              Videos
            </button> : ''}
          <button className={`detail-button ${active === 'photos' ? 'button-border' : ''}`}
            style={active === 'photos' ? activeStyles : []}
            onClick={() => setActive('photos')}
          >
            Photos
          </button>
        </div>
        <Suspense fallback={<Loading />}>
          <section className='detail-section'>
            {active === 'overview' && <Overview media={movie} />}
            {active === 'videos' && <Videos media={movie.videos.results}
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange} />}
            {active === 'photos' && <Photos media={movie.images} />}
            <div className="detail-sliders">
              {moreLikeThis && (
                <>
                  <h2 className="media-detail-title">More Like This</h2>
                  {moreLikeThis}
                </>)}
            </div>
          </section>
        </Suspense>
      </div>
    </>
  )
}