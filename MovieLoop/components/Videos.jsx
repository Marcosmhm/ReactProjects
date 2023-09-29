import { useState } from 'react'
import ReactPlayer from 'react-player'

export default function DetailNavbar(media, selectedFilter, onFilterChange) {

  let videoElements = ''
  if (selectedFilter === 'All') {
    videoElements = media.map(video => {
      return (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.key}`}
          className="detail-video"
          controls
          light
        />
      )
    })
  } else {
    videoElements = media.filter(video => video.type === selectedFilter).map(video => {
      return (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.key}`}
          className="detail-video"
          controls
          light
        />
      )
    })
  }

  return (
    <>
      <div className="test">
      </div>
      <select
        className='detail-videos-filter'
        id="filter"
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Clip">Clip</option>
        <option value="Teaser">Teaser</option>
        <option value="Trailer">Trailer</option>
      </select>
      <div className="detail-videos-container">
        {videoElements}
      </div>
    </>
  )
}