export default function Overview(midia) {
  const backdrops = midia.backdrops.map(({ file_path }) => {
    return (
      <div className="detail-image-card">
        <img src={`https://image.tmdb.org/t/p/original/${file_path}`} className="backdrop-image"/>
      </div>
    )
  }).slice(0, 12)
  return (
    <>
      <h2>Backdrops</h2>
      <div className="detail-image-container">
        {backdrops}
      </div>
    </>
  )
}