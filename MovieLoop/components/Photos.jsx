import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


export default function Photos({ media }) {
  const backdrops = media.backdrops?.filter(({ iso_639_1 }) => iso_639_1 === 'en').map(({ file_path }, index) => {
    return (
      <div className="detail-image-card" key={`backdrop-${index}`}>
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/w1280/${file_path}`} 
          className="backdrop-image"
          effect="blur"
        />
      </div>
    )
  })
  const posters = media.posters?.filter(({ iso_639_1 }) => iso_639_1 === 'en').map(({ file_path }, index) => {
    return (
      <div className="detail-image-card" key={`poster-${index}`}>
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/w500/${file_path}`}
          className="backdrop-image"
          effect="blur"
        />
      </div>
    )
  })

  const profiles = ''

  return (
    <>
      <div className="detail-photos-container">
        <h2>Backdrops</h2>
        <div className="detail-backdrop-container">
          {backdrops}
        </div>
        <h2>Posters</h2>
        <div className="detail-poster-container">
          {posters}
        </div>
      </div>
    </>
  )
}