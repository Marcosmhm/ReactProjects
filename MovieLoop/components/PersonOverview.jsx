import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

export default function PersonOverview({ ...props }) {
  const biographyLines = props.biography.split('\n')
  
  const biographyElements = biographyLines.map((line, index) => {
    if (line) {
      return (
        <>
          <p key={`biography-${index}`}>{line}</p>
        </>
      )
    }
  })

  return (
    <>
      <section className="person-overview-container">
        <h1>{props.name}</h1>
        <LazyLoadImage
          src={props.url}
          className="person-poster-img"
          effect="blur"
        />
        <div className="person-overview-info">
          {biographyElements}
          <ul className="person-list">
            <li><span className="detail-li-title">Know For</span><span className="detail-li-content">{props.knowFor}</span></li>
            <li><span className="detail-li-title">Born</span><span className="detail-li-content">{props.birthDay}</span></li>
            <li><span className="detail-li-title">Place of Birth</span><span className="detail-li-content">{props.placeOfBirth}</span></li>
          </ul>
        </div>
      </section>
    </>
  )
}