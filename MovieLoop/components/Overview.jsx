import { renderCast } from "../utils"

export default function Overview(media) {
  const directors = media.credits.crew.filter(({job}) => job === 'Director')
  .map( (director) => director.name)
  
  const genres = media.genres.map((genre, index) => {
    return genre.name
  })
  
  const companies = media.production_companies.map((companie, index) => {
    return companie.name.charAt(0).toUpperCase() + companie.name.slice(1)
  })
  
  const date = new Date(media.release_date).toLocaleDateString('en-gb', {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  
  const detailItems = [
    { title: 'Released', content: date },
    { title: 'Runtime', content: media.runtime },
    { title: 'Director', content: directors },
    { title: 'Budget', content: media.budget },
    { title: 'Revenue', content: media.revenue },
    { title: 'Genre', content: genres.join(', ') },
    { title: 'Status', content: media.status },
    { title: 'Language', content: media.original_language },
    { title: 'Production', content: companies.join(', ') }
  ]

  const renderItems = detailItems.map((item, index) => {
    if (item.content) {
      return (
        <li key={index}>
          <span className="detail-li-title">{item.title}</span>
          <span className="detail-li-content">{item.content}</span>
        </li>
      )
    }
    return null
  })

  return (
    <>
      <div className="detail-overview">
        <h2>Storyline</h2>
        <p>{media.overview}</p>
        <ul>
          {renderItems}
        </ul>
        <h2 className="cast-title">Cast</h2>
        {renderCast(media.credits.cast)}
      </div>
    </>
  )
}