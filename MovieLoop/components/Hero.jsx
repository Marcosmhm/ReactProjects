import { Link } from "react-router-dom"

import Stars from "./Stars"

export default function Hero({ image, title, rating, reviews, airDate, seasons, overview }) {
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
          </div>
      </section>
    </>
  )
}