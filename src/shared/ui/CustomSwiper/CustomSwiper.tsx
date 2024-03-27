import 'swiper/css'
import 'swiper/css/pagination'
import './CustomSwiper.css'

import React, { FC, PropsWithChildren } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SwiperProps {
  styles?: string
  spaceBetween?: number
  slidesPerView?: number
  loop?: boolean
  grabCursor?: boolean
  pagination?: { clickable: boolean }
}

export const CustomSwiper: FC<PropsWithChildren<SwiperProps>> = ({
  children,
  styles,
  spaceBetween,
  slidesPerView,
  pagination,
  loop,
  grabCursor,
}) => {
  return (
    <Swiper
      className={styles}
      modules={[Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={pagination}
      loop={loop}
      grabCursor={grabCursor}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
