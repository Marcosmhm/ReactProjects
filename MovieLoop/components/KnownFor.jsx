import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import placeHolder from '../src/assets/images/poster_placeholder.jpg'
export default function KnownFor({ handleFilterChange, selectedFilter, ...props }) {
  
  let creditsArray = []
  if (selectedFilter === 'cast') {
    creditsArray = props.credits.cast
  } else {
    creditsArray = props.credits.crew
  }

  const creditsElements = creditsArray
    .sort((a, b) => b.vote_count - a.vote_count)
    .map((item, index) => (
      <>
        <div className="a" key={item.id}>
          <Link to={`/${item.media_type}/${item.id}`}>
            <LazyLoadImage
              key={`${item.id}-${index}`}
              src={item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : placeHolder}
              effect="blur"
              className="person-credits-image"
            />
            <span className="person-credits-job">
              {item.character ? `Character played: ${item.character}` : item.job}
            </span>
          </Link>
        </div>
      </>
    ));

  return (
    <>
      <select
        className='detail-media-filter'
        id="filter"
        value={selectedFilter}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="cast">Cast</option>
        <option value="crew">Crew</option>
      </select>
      <section className="person-credits-wrapper">
        {creditsElements}
      </section>
    </>
  )
}