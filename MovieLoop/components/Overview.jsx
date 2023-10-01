import { render } from "react-dom"
import { renderCast } from "../utils"

export default function Overview({ media }) {
  console.log(media)
  const directors = media.credits?.crew.filter(({ job }) => job === 'Director')
    .map((director) => director.name)
  const creators = media.created_by?.map((creator) => creator.name) || ''

  const genres = media.genres.map((genre, index) => {
    return genre.name
  })

  const companies = media.production_companies.map((companie, index) => {
    return companie.name.charAt(0).toUpperCase() + companie.name.slice(1)
  })

  const date = new Date(media.release_date || media.first_air_date).toLocaleDateString('en-gb', {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  function toLocaleDateMedia(media) {
    return new Date(media).toLocaleDateString('en-gb', {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  function toCurrencyStyle(content) {
    return content?.toLocaleString('en-Us', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const detailItems = [
    { title: media.original_title ? 'Released' : 'First Aired', content: toLocaleDateMedia(media.release_date || media.first_air_date) },
    { title: 'Last Aired', content: media.last_air_date ? toLocaleDateMedia(media.last_air_date) : '' },
    { title: 'Runtime', content: media.original_title ? media.runtime + ' minutes' : ''},
    { title: media.created_by ? 'Creator' : 'Director', content: creators || directors },
    { title: 'Budget', content: toCurrencyStyle(media.budget) !== '$0.00' && toCurrencyStyle(media.budget)},
    { title: 'Revenue', content: toCurrencyStyle(media.revenue) !== '$0.00' && toCurrencyStyle(media.revenue) },
    { title: 'Genre', content: genres.join(', ') },
    { title: 'Seasons', content: media.number_of_seasons},
    { title: 'Episodes', content: media.number_of_episodes },
    { title: 'Status', content: media.status },
    { title: 'Language', content: media.original_language },
    { title: 'Production', content: companies.join(', ') }
  ]

  const renderItems = detailItems.map((item, index) => {
    if (item.content) {
      return (
        <li key={`${item.title} ${index}`}>
          <span className="detail-li-title">{item.title}</span>
          <span className="detail-li-content">{item.content}</span>
        </li>
      )
    }
    return null
  })

  let usProviders = ''
  let renderAvailableAt = ''
  if ('US' in (media['watch/providers'].results) ) {
    if('buy'in (media['watch/providers'].results.US)) {
      usProviders = media['watch/providers'].results.US.buy
    } else if ('flatrate' in (media['watch/providers'].results.US)) {
      usProviders = media['watch/providers'].results.US.flatrate
    }
    renderAvailableAt = usProviders.map((provider, index) => {
      return (
        <>
          <img key={`provider-${index}`} src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
            className="company-logo"
          />
        </>
      )
    })
  }

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
          {renderAvailableAt && (
            <>
              <h2>Available At: </h2>
              <div className="overview-available-container">
                {renderAvailableAt}
              </div>
            </>
          )}
        </div>
      </div>
      <h2 className="cast-title">Cast</h2>
      {renderCast(media.credits.cast)}
    </>
  )
}