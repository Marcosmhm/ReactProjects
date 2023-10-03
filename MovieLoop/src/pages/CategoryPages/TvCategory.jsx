import { useLoaderData, useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { getShows } from "../../../services/api"
import InfiniteScroll from "../../../components/InfineScroll";
import Loading from "../../../components/Loading";
import Stars from "../../../components/Stars";
import '../../assets/css/category.css'
import placeHolder from '../../assets/images/poster_placeholder.jpg'

let query = ''
let title = ''
export function loader({ params }) {
  const queryArray = [
    {
      fullQuery: 'popular_shows',
      shortQuery: 'trending',
    },
    {
      fullQuery: 'trending_tv_shows',
      shortQuery: 'trending',
    },
    {
      fullQuery: 'top_rated_shows',
      shortQuery: 'top_rated',
    },
    {
      fullQuery: 'upcoming_shows',
      shortQuery: 'upcoming',
    },
  ]

  title = params.query.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  const match = queryArray.find((query) => query.fullQuery === params.query);
  query = match ? match.shortQuery : null;

  return getShows(query)
}

export default function TvCategory() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState(useLoaderData())
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchShows = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const showData = await getShows(query, page)
      setData(prevData => [...prevData, ...showData])
      setPage(prevPage => prevPage + 1)
    } catch (e) {
      console.log(e)
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchShows()
  }, []) 
  
  return (
    <>
      <section className="section-container">
        <h2 className='category-title'>{title}</h2>
        <div className="infinite-grid">
          {data.map((media, index) => {
            return (
              <Link
              key={`${media.id} ${index}`}
              to={media.original_title ? `../movie/${media.id}` : `../tv/${media.id}`}
              >
                <LazyLoadImage
                  src={media.poster_path ? `https://image.tmdb.org/t/p/w342/${media.poster_path}` : placeHolder}
                  className="slider-item"
                  effect="blur"
                />
                <div className="slider-item-info">
                  <span className="slider-item-title">
                    {media.title ? media.title : media.name}
                  </span>
                  <div className="slider-item-review">
                    <Stars
                      rating={(media.vote_average?.toFixed(2) / 2)}
                    />
                    <span className="slider-item-reviews-vote">
                      {media.vote_average?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <InfiniteScroll onScrollEnd={fetchShows} isLoading={isLoading} />
        {isLoading && <Loading />}
        {error && <p>Error: {error.message}</p>}
      </section>
    </>
  )
}