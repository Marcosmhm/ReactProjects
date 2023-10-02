import { useLoaderData, useParams } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'

const Overview = lazy(() => import('../../../components/MediaOverview'))
const Videos = lazy(() => import('../../../components/Videos'))
const Photos = lazy(() => import('../../../components/Photos'))
import Loading from '../../../components/Loading'
import { getSpecificMovie } from '../../../services/api'
import { renderHeroMedia, renderMediaElements } from '../../../utils'
import '../../assets/css/mediaDetail.css'

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

  const moreLikeThis = renderMediaElements(movie.recommendations.results, 'More Like This')

  return (
    <>
      <h3 className='detail-title'>{movie.original_title}</h3>
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
            <div className="detail-recommendations">
              {
                moreLikeThis.props.children.props.data.length >= 1 && moreLikeThis
              }
            </div>
          </section>
        </Suspense>
      </div>
    </>
  )
}