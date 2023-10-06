import { getDetails, getTrending } from "../../services/api"
import { defer, useLoaderData, Await, useLocation } from "react-router-dom"
import { Suspense } from "react"

import Loading from "../../components/Loading"

import { renderHeroMedia, renderMediaElements } from "../../utils"



const randomNumber = (max) => Math.floor((Math.random() * max))
const mediaType = ['tv', 'movie']

export function loader() {
  return defer({
    banner:
      getDetails(mediaType[randomNumber(2)], randomNumber(20)
      ),
    movies: getTrending('movie'),
    tv: getTrending('tv'),
  })
}

export default function Home() {
  const location = useLocation()
  const dataPromise = useLoaderData()

  function renderTvShows(tv) {
    return (
      <>
        {renderMediaElements(tv, 'Trending TV Shows')}
      </>
    )
  }

  return (
    <>
      {/* {location.state.message} */}
      <Suspense fallback={<h2>Loading <Loading /> </h2>}>
        <div className="section-container">
          <Await resolve={dataPromise.banner}>
            {renderHeroMedia}
          </Await>
          <section className="media-section">
            <Await resolve={dataPromise.movies}>
              {(movies) => renderMediaElements(movies, 'Trending Movies')}
            </Await>
            <Await resolve={dataPromise.tv}>
              {renderTvShows}
            </Await>
          </section>
        </div>
      </Suspense>
    </>
  )
}

