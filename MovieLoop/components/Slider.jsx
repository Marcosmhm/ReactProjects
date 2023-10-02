import { Link } from 'react-router-dom'

import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register()

export default function Slider({ data, title, type, link }) {
  return (
    <>
      {
        title && <>
        <div className="slider-title-wrapper">
        <h2 className='slider-title'>{title}</h2>
        <Link to={`/${type}/category/${link}`}>
          <span>Explore All</span>
        </Link>
      </div>
        </>
      }
      <Swiper className='slider'
        slidesPerView={'auto'}
        navigation
        autoplay
        spaceBetween={10}
        breakpoints={{
          280: {
            slidesPerView: 2,
          },
          430: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 4,
          },
          700: {
            slidesPerView: 5,
          },
          1080: {
            slidesPerView: 6,
          },
          1366: {
            slidesPerView: 7,
          },
          1600: {
            slidesPerView: 8,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={`slider-${index}`}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}