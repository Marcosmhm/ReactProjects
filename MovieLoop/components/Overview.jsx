import { renderCast } from "../utils"

export default function Overview(media) {
  console.log('oi', media)
  const directors = media.credits.crew.filter(({ job }) => job === 'Director')
    .map((director) => director.name)

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

  function toCurrencyStyle(content) {
    return content.toLocaleString('en-Us', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const detailItems = [
    { title: 'Released', content: date },
    { title: 'Runtime', content: media.runtime },
    { title: 'Director', content: directors },
    { title: 'Budget', content: toCurrencyStyle(media.budget) },
    { title: 'Revenue', content: toCurrencyStyle(media.revenue) },
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

  let usProviders = media['watch/providers'].results.US
  let renderAvailableAt = usProviders.buy.map(provider => {
    console.log(provider)
    return (
      <>
          <img src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
            className="company-logo"
          />
      </>
    )
  })
  console.log(renderAvailableAt)

  return (
    <>
      <div className="detail-overview">
        <div className="overview-img-container">
          <img
            className="overview-poster"
            src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
          />
        </div>
        <div className="overview-summary">
          <h2>Storyline</h2>
          <p>{media.overview}</p>
          <ul>
            {renderItems}
          </ul>
          <h2>Buy At: </h2>
          <div className="overview-available-container">
            {renderAvailableAt}
          </div>
        </div>
      </div>
      <h2 className="cast-title">Cast</h2>
      {renderCast(media.credits.cast)}
    </>
  )
}