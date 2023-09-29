import { renderCast } from "../utils"

export default function Overview(midia) {
  console.log(midia)
  const directors = midia.credits.crew.filter(({job}) => job === 'Director')
  .map( (director) => director.name)
  
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
  
  const detailItems = [
    { title: 'Released', content: date },
    { title: 'Runtime', content: midia.runtime },
    { title: 'Director', content: directors },
    { title: 'Budget', content: midia.budget },
    { title: 'Revenue', content: midia.revenue },
    { title: 'Genre', content: genres.join(', ') },
    { title: 'Status', content: midia.status },
    { title: 'Language', content: midia.original_language },
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
        <p>{midia.overview}</p>
        <ul>
          {renderItems}
        </ul>
        <h2 className="cast-title">Cast</h2>
        {renderCast(midia.credits.cast)}
      </div>
    </>
  )
}