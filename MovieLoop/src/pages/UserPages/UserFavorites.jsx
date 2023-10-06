
import { useEffect, useState } from "react"
import { useLoaderData, Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

import placeHolder from '../../assets/images/poster_placeholder.webp'
import { getUserFavorites } from "../../../services/api"
import FavoriteMedia  from '../../../components/FavoriteMedia'
import Stars  from '../../../components/Stars'

export async function loader() {
  const sessionId = localStorage.getItem('sessionId')
  const [movieFavorites, tvFavorites] = await Promise.all([
    getUserFavorites(sessionId, 'movie'),
    getUserFavorites(sessionId, 'tv')
  ])
  return {movieFavorites, tvFavorites}
}

export default function UserFavorites() {
  const { movieFavorites, tvFavorites }  = useLoaderData()
  console.log(useLoaderData())
  console.log('all'. allFavorites)
  console.log('mv'. movieFavorites)
  console.log('tv'. tvFavorites)
  const allFavorites = [...movieFavorites, ...tvFavorites]
  let [getUserFavoriteData, setGetUserFavoriteData] = useState()

  const getFavorites = async () => {
    setGetUserFavoriteData([...movieFavorites.map(media => media.id), ...tvFavorites.map(media => media.id)]);
    console.log('salve', getUserFavoriteData)
  }

  const handleFavoriteClick = async (type, mediaId, bool) => {
    await addToFavorite(type, mediaId, localStorage.getItem('sessionId'), bool);
    await getFavorites();
  }

  useEffect(() => {
    getFavorites()
  }, [])
  
  return (
    <>
      <section className="section-container">
        <h2 className="category-title search-title">Your Favorites</h2>
        <div className="infinite-grid">
          {allFavorites.map((media, index) => {
            return (
              <>
                <div className="search-card">
                  {<FavoriteMedia
                    data={media}
                    type={'movie'}
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