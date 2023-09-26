import Stars from "./Stars"

export default function Hero({ image, title, rating, reviews, airDate, seasons }) {
  return (
    <>
      <section className="midia-hero-banner">
          <div className="img-container">
            <img src={image} className="hero-poster" />
          </div>
          <div className="hero-info">
            <h1>{title}</h1>
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
      </section>
    </>
  )
}