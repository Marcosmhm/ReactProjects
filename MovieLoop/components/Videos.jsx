import ReactPlayer from 'react-player/lazy'
export default function DetailNavbar(midia) {
  console.log(midia)
  const videoElements = midia.map(video => {
    return (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.key}`}
          className="detail-video"
          controls
          light
        />
    )
  })
  return (
    <>
      <div className="detail-videos-container">
        {videoElements}
      </div>
    </>
  )
}