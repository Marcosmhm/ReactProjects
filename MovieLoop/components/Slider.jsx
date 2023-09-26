import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register()

export default function Slider({ data, title }) {
  return (
    <>
      <h2 className='slider-title'>{title}</h2>
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
          700: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 5,
          },
          1080: {
            slidesPerView: 6,
          },
          1366: {
            slidesPerView: 7,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}