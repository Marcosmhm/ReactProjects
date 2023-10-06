import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";

import { searchMulti, addToFavorite, getUserFavorites } from "../../services/api"
import FavoriteMedia from "../../components/FavoriteMedia";
import Stars from "../../components/Stars";
import placeHolder from '../assets/images/poster_placeholder.jpg'

export default function Search() {
  const [data, setData] = useState([])
  let [getUserFavoriteData, setGetUserFavoriteData] = useState([])
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
    let isAborted = false

    if (!isAborted) {
      if (query) {
        fetchData(query);
      }
    }
    return () => {
      isAborted = true
    }
  }, [query])


  const getFavorites = async () => {
    const movieResults = await getUserFavorites(localStorage.getItem('sessionId'), 'movie');
    const tvResults = await getUserFavorites(localStorage.getItem('sessionId'), 'tv');
    setGetUserFavoriteData([...movieResults.map(media => media.id), ...tvResults.map(media => media.id)]);
  }

  const handleFavoriteClick = async (type, mediaId, bool) => {
    await addToFavorite(type, mediaId, localStorage.getItem('sessionId'), bool);
    await getFavorites();
  }

  useEffect(() => {
    getFavorites()
  }, [])

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
              <>
                <div className="search-card">
                  {<FavoriteMedia
                    data={media}
                    type={media.media_type}
                    getUserData={getUserFavoriteData}
                    handleClick={handleFavoriteClick}
                    className={'add-to-favorite-search'}
                    key={index} />}
                  <Link
                    key={`${media.id}-${index}`}
                    to={media.media_type === 'movie' ? `../movie/${media.id}` : media.media_type === 'tv' ? `../tv/${media.id}` : media.media_type === 'person' ? `../person/${media.id}` : ''}
                  >
                    <LazyLoadImage
                      src={media.poster_path ? `https://image.tmdb.org/t/p/w342/${media.poster_path}` : media.profile_path ? `https://image.tmdb.org/t/p/w342/${media.profile_path}` : placeHolder}
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
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}