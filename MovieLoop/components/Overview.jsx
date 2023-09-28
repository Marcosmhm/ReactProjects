import { getCast } from "../utils"

export default function Overview(midia) {
  console.log(midia)
  const directors = midia.credits.crew.filter(({job}) => job === 'Director').map( (director) => director.name)
  const genres = midia.genres.map((genre, index) => {
    return genre.name
  })
  const companies = midia.production_companies.map((companie, index) => {
    return companie.name.charAt(0).toUpperCase() + companie.name.slice(1)
  })
  const date = new Date(midia.release_date).toLocaleDateString('en-gb', {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <>
      <div className="detail-overview">
        <h2>Storyline</h2>
        <p>{midia.overview}</p>
        <ul>
          <li><span className="detail-li-title">Relased</span> <span className="detail-li-content">{date}</span></li>
          <li><span className="detail-li-title">Runtime</span> <span className="detail-li-content">{midia.runtime}</span></li>
          <li><span className="detail-li-title">Director</span> <span className="detail-li-content">{directors}</span></li>
          <li><span className="detail-li-title">Budget</span> <span className="detail-li-content">{midia.budget}</span></li>
          <li><span className="detail-li-title">Revenue</span> <span className="detail-li-content">{midia.revenue}</span></li>
          <li><span className="detail-li-title">Genre</span> <span className="detail-li-content">{genres.join(', ')}.</span></li>
          <li><span className="detail-li-title">Status</span> <span className="detail-li-content">{midia.status}</span></li>
          <li><span className="detail-li-title">Language</span> <span className="detail-li-content">{midia.original_language}</span></li>
          <li><span className="detail-li-title">Production</span> <span className="detail-li-content">{companies.join(', ')}.</span></li>
        </ul>
        <h2 className="cast-title">Cast</h2>
        {getCast(midia.credits.cast)}
      </div>
    </>
  )
}