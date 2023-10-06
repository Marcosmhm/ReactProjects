import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs"

export default function Stars({ rating, reviews }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5
    return (
      <span key={index}>
        {
          rating >= index + 1 ? (<BsStarFill color="#2779a7" />) : rating >= number ? (<BsStarHalf color="#2779a7" />) : (<BsStar color="#2779a7" />)
        }
      </span>
    )
  })
  return (
    <>
      {ratingStar}
      <span className="hero-reviews">
        {reviews && `${reviews} Reviews`}
      </span>
    </>
  );
}