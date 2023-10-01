import { useState } from "react"
import { useLoaderData, useParams } from 'react-router-dom'

import Overview from '../../../components/Overview'
import Photos from '../../../components/Photos'
import Videos from '../../../components/Videos'
import Episodes from "../../../components/Episodes"
import '../../assets/css/mediaDetail.css'
import { getSpecifiShow, getShowSeason } from '../../../services/api'
import { renderHeroMedia, renderMediaElements } from '../../../utils'

export function loader({params} ) {
  return getSpecifiShow(params.id)
}

export default function TvDetail() {
  const [season, setSeason] = useState(1)
  const tv = useLoaderData()
  const [active, setActive] = useState('overview')
  
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [selectedSeason, setSelectedSeason] = useState(1)
  

  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000",
  }

  const handleFilterChange = filter => setSelectedFilter(filter);
  const handleSeasonChange = season => setSelectedSeason(season)

  return (
    <>
      <h3 className='detail-title'>{tv.original_title}</h3>
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
          <button className={`detail-button ${active === 'videos' ? 'button-border' : ''}`} 
            style={active === 'videos' ? activeStyles : []}
            onClick={() => setActive('videos')}
          >
            Videos
          </button>
          <button className={`detail-button ${active === 'photos' ? 'button-border' : ''}`} 
            style={active === 'photos' ? activeStyles : []}
            onClick={() => setActive('photos')}
          >
            Photos
          </button>
        </div>
        <section className='detail-section'>
          {active === 'overview' && Overview(tv)}
          {active === 'videos' && Videos(tv.videos.results, selectedFilter, handleFilterChange)}
          {active === 'photos' && Photos(tv.images)}
          {active === 'episodes' && <Episodes 
                                      media={tv} 
                                      selectedSeason={selectedSeason} 
                                      onSeasonChange={handleSeasonChange}/>}
          <div className="detail-recommendations">
            {renderMediaElements(tv.recommendations.results, 'More Like This')}
          </div>
        </section>
      </div>
    </>
  )
}