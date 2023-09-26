import { defer, useLoaderData, Await } from "react-router-dom"
import { getDetails, getShows } from "../../services/api"
import { Suspense } from "react"

import Loading from "../../components/Loading"
import { getHeroMidia as renderHeroMidia, getMidiaElements as midiaElements} from "../../utils"

const randomNumber = (max) => Math.floor(Math.random() * max)

export function loader() {
  return defer({
    banner : getDetails('tv', randomNumber(20)),
    popular: getShows('trending'),
    topRated: getShows('top_rated'),
    onAir: getShows('on_the_air'),
  })
}

export default function Tv() {
  const dataPromise = useLoaderData()

  function renderTrending(shows) {
    return (
      <>
       {midiaElements(shows, 'Popular shows')}
      </> 
    )
  }

  function renderTopRated(shows) {
    return (
      <>
        {midiaElements(shows, 'Top Rated shows')}
      </> 
    )
  }

  function renderOnAir(shows) {
    return (
      <>
        {midiaElements(shows, 'Currently Airing TV Shows')}
      </> 
    )
  }

  return (
    <>
      <Suspense fallback={<h2>Loading <Loading /> </h2>}>
        <div className="section-container">
          <Await resolve={dataPromise.banner}>
            {renderHeroMidia}
          </Await>
          <section className="midia-section">
            <Await resolve={dataPromise.popular}>
              {renderTrending}
            </Await>
            <Await resolve={dataPromise.topRated}>
              {renderTopRated}
            </Await>
            <Await resolve={dataPromise.onAir}>
              {renderOnAir}
            </Await>
          </section>
        </div>
      </Suspense>
    </>
  )
}