import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import CardProductRecommend from '../../Card/CardProductRecommend';
import "swiper/css";
import { Keyboard, Mousewheel, Navigation } from 'swiper';

const SliderProduct = ({ arrProducts }: any) => {

  return (
    <>
      {arrProducts.length > 0 ? <Swiper

        slidesPerView={4}
        spaceBetween={14}
        cssMode={true}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper PromoSlider"
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {arrProducts.map((item: any, i: any) => {
          return <SwiperSlide key={i}>
            <CardProductRecommend product={item} />
          </SwiperSlide>

        })}
      </Swiper> : 2}
    </>

  )
}

export default SliderProduct