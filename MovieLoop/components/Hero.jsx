import { useState } from "react"
import { AiOutlinePlayCircle } from 'react-icons/ai'

import TrailerModal from './TrailerModal'
import Stars from "./Stars"
import { Link } from "react-router-dom"

export default function Hero({ image, title, rating, reviews, airDate, seasons, overview, link, }) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleWatchTrailerClick() {
    document.body.style.overflow = 'hidden'
    return setIsModalOpen(true)
  }

  function handleCloseModal() {
    document.body.style.overflow = 'unset'
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="media-hero-container">
          <div className="img-container">
            <img
              src={image}
              className="hero-poster"
            />
          </div>
        <div className="hero-info">
          <Link to={link}>
            <h1>{title}</h1>
            <div className="hero-container">
              <div className="hero-rating">
                <Stars
                  rating={rating}
                  reviews={reviews}
                />
              </div>
              <div className="hero-media-info">
                <span className="hero-media-date">
                  {airDate}
                </span>
                <span>
                  {seasons}
                </span>
              </div>
            </div>
            <p className="hero-media-overview">
              {overview}
            </p>
          </Link>
          <button onClick={handleWatchTrailerClick} className="hero-button"><AiOutlinePlayCircle />Watch Trailer</button>
          {isModalOpen && (
            <TrailerModal
              onClose={handleCloseModal}
              videoUrl={`https://www.youtube.com/watch?v=${url}`} />
          )}
        </div>
      </section>
    </>
  )
}