import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import styles from './GoodProductdaySlider.module.scss';
import CardProductDiscount from '../../Card/CardProductDiscount';
const GoodProductdaySlider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper mySwiperGood'
      >
        <SwiperSlide>
          <CardProductDiscount/>
        </SwiperSlide>
        <SwiperSlide>
          <CardProductDiscount/>
        </SwiperSlide>
        <SwiperSlide>
          <CardProductDiscount/>
        </SwiperSlide>
        <SwiperSlide>
          <CardProductDiscount/>
        </SwiperSlide>
        <SwiperSlide>
          <CardProductDiscount/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default GoodProductdaySlider