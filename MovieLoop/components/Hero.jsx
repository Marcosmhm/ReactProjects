import Stars from "./Stars"

export default function Hero({ image, title, rating, reviews, airDate, seasons, overview}) {
  return (
    <>
      <section className="midia-hero-container">
          <div className="img-container">
            <img src={image} className="hero-poster" />
          </div>
          <div className="hero-info">
            <h1>{title}</h1>
            <div className="hero-midia-container">
              <div className="hero-rating">
                <Stars 
                  rating={rating} 
                  reviews={reviews}
                  />
              </div>
              <div className="hero-midia-info">
                <span className="hero-midia-date">
                  {airDate}
                </span>
                <span>
                  {seasons}
                </span>
              </div>
            </div>
              <p className="hero-midia-overview">
                {overview}
              </p>
          </div>
      </section>
    </>
  )
}