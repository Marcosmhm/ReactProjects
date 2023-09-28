export default function Overview(midia) {
  console.log(midia)
  const directors = midia.credits.crew.filter(({job}) => job === 'Director').map( (director) => director.name)
  const genres = midia.genres.map(genre => genre.name)
  const companies = midia.production_companies.map(companie => companie.name)
  return (
    <>
      <div className="midia-overview">
        <h2>Storyline</h2>
        <p>{midia.overview}</p>
        <ul>
          <li>Relased {midia.release_date}</li>
          <li>Runtime {midia.runtime}</li>
          <li>Director {directors}</li>
          <li>Budget {midia.budget}</li>
          <li>Revenue {midia.revenue}</li>
          <li>Genre {genres}</li>
          <li>Status {midia.status}</li>
          <li>Language {midia.original_language}</li>
          <li>Production {companies}</li>
        </ul>
      </div>
    </>
  )
}