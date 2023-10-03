import { useEffect, useState } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";

import { searchMulti } from "../../services/api"
import SeachModal from "../../components/SearchModal";
import Stars from "../../components/Stars";
import placeHolder from '../assets/images/poster_placeholder.jpg'

export default function Search() {
  const [data, setData] = useState([])
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const navigation = useNavigate()

  async function fetchData(query) {
    try {
      const response = await searchMulti(query);
      setData(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    if (query) {
      fetchData(query);
    }
  }, [query])

  function handleNavigate() {
    return navigation(- query.length)
  }

  return (
    <>
      <section className="section-container">
        <h2 className="category-title search-title">Results for: {query}</h2>
        <span className="search-close-button" onClick={handleNavigate}>
            Go back
        </span>
        <div className="infinite-grid">
          {data.map((media, index) => {
            return (
              <Link
                key={`${media.id}-${index}`}
                to={media.original_title ? `../movie/${media.id}` : media.original_name ? `../tv/${media.id}` : `../person/${media.id}`}
              >
                <LazyLoadImage
                  src={media.poster_path ? `https://image.tmdb.org/t/p/w342/${media.poster_path}` : `https://image.tmdb.org/t/p/w342/${media.profile_path}` || placeHolder}
                  className="slider-item search-image"
                  effect="blur"
                />
                <div className="slider-item-info">
                  <span className="slider-item-title">
                    {media.title ? media.title : media.name}
                  </span>
                  <div className="slider-item-review">
                    <Stars
                      rating={(media.vote_average?.toFixed(2) / 2) || (media.popularity?.toFixed(2) / 2)}
                    />
                    <span className="slider-item-reviews-vote">
                      {media.vote_average?.toFixed(2) || `${media.popularity?.toFixed(2)} popularity`}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}