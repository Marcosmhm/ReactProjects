import { useState, lazy, Suspense } from "react"
import { useLoaderData, useParams, Link, useNavigate } from 'react-router-dom'

const Episodes = lazy(() => import('../../../components/Episodes'))
const Overview = lazy(() => import('../../../components/MediaOverview'))
const Videos = lazy(() => import('../../../components/Videos'))
const Photos = lazy(() => import('../../../components/Photos'))
import { BiArrowBack } from 'react-icons/bi'
import Loading from "../../../components/Loading"

import { getSpecifiShow } from '../../../services/api'
import { renderHeroMedia, renderMediaElements } from '../../../utils'


export function loader({ params }) {
  return getSpecifiShow(params.id)
}

export default function TvDetail() {
  const navigation = useNavigate()
  const [season, setSeason] = useState(1)
  const tv = useLoaderData()
  const [active, setActive] = useState('overview')

  const [selectedFilter, setSelectedFilter] = useState('All')
  const [selectedSeason, setSelectedSeason] = useState(1)

  const moreLikeThis = tv.recommendations.results.length >= 1 ? renderMediaElements(tv.recommendations.results) : `` 

  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000",
  }

  const handleFilterChange = filter => setSelectedFilter(filter);
  const handleSeasonChange = season => setSelectedSeason(season)


  return (
    <>
      <div className='detail-title'>
        <span className="title-back-button">
            {<BiArrowBack size={22} onClick={() => navigation(-1)} />}
        </span>
        {tv.name}
      </div>
      <div className="section-container">
        {renderHeroMedia(tv)}
        <div className="button-wrapper">
          <button className={`detail-button ${active === 'overview' ? 'button-border' : ''}`}
            style={active === 'overview' ? activeStyles : []}
            onClick={() => setActive('overview')}
          >
            Overview
          </button>
          <button className={`detail-button ${active === 'episodes' ? 'button-border' : ''}`}
            style={active === 'episodes' ? activeStyles : []}
            onClick={() => setActive('episodes')}
          >
            Episodes
          </button>
          {tv.videos.results.length >= 1 ?
            <button className={`detail-button ${active === 'videos' ? 'button-border' : ''}`}
              style={active === 'videos' ? activeStyles : []}
              onClick={() => setActive('videos')}
            >
              Videos
            </button> : ''}
          {tv.images.posters.length >= 1 ?
            <button className={`detail-button ${active === 'photos' ? 'button-border' : ''}`}
              style={active === 'photos' ? activeStyles : []}
              onClick={() => setActive('photos')}
            >
              Photos
            </button> : ''}
        </div>
        <section className='detail-section'>
          <Suspense fallback={<Loading />}>
            {active === 'overview' && <Overview media={tv} />}
            {active === 'videos' && <Videos media={tv.videos.results}
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange} />}
            {active === 'photos' && <Photos media={tv.images} />}
            {active === 'episodes' && <Episodes
              media={tv}
              selectedSeason={selectedSeason}
              onSeasonChange={handleSeasonChange} />}
          </Suspense>
          <div className="detail-sliders">
            {moreLikeThis &&
              <>
                <h2 className="media-detail-title">More Like This</h2>
                {moreLikeThis}
              </>}
          </div>
        </section>
      </div>
    </>
  )
}