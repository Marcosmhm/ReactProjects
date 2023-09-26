import Hero from "./components/Hero"
import Slider from "./components/Slider"

export function getHeroMidia( midia ) {
  const seasonString = midia.number_of_seasons > 1 ? "seasons" : "season"
  const midiaELement = (  
    <>
      <Hero 
        image={`https://image.tmdb.org/t/p/original/${midia.backdrop_path}`}
        title={midia.title ? midia.title : midia.name}
        rating={(midia.vote_average / 2).toFixed(2)}
        reviews={midia.vote_count}
        airDate={midia.first_air_date ? midia.first_air_date.slice(0, 4) : midia.release_date.slice(0, 4)}
        seasons={midia.number_of_seasons ? `${midia.number_of_seasons} ${seasonString} `
        : `${midia.runtime} minutes`}
      /> 
    </>
  )
  return (
    <>
      {midiaELement}
    </>
  )
}

export function getMidiaElements(midia, title) {
  const midiaElements = midia.map(midia => (  
    <>
      <img src={`https://image.tmdb.org/t/p/original/${midia.poster_path || midia.backdrop_path}`} className="slider-item" />
    </>
    ))
    return (
      <>
        <Slider
          title={title}
          data={midiaElements}
        />
    </> 
  )
}