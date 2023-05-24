import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";
import 'swiper/scss';
import styles from './SliderLine.module.scss'
const SliderLine = () => {
    return (
      <div className={styles.wrap}>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={`mySwiper SwiperSliderLine`}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/428/428e3aba4148f15f0df75803e6ce13c6.png/resize/1200x110/" alt="" /></SwiperSlide>
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/40e/40e88d941c9a23c8ffd77cb93e2f2a2c.png/resize/1200x110/" alt="" /></SwiperSlide>
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/428/428e3aba4148f15f0df75803e6ce13c6.png/resize/1200x110/" alt="" /></SwiperSlide>
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/40e/40e88d941c9a23c8ffd77cb93e2f2a2c.png/resize/1200x110/" alt="" /></SwiperSlide>
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/428/428e3aba4148f15f0df75803e6ce13c6.png/resize/1200x110/" alt="" /></SwiperSlide>
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/40e/40e88d941c9a23c8ffd77cb93e2f2a2c.png/resize/1200x110/" alt="" /></SwiperSlide>
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/428/428e3aba4148f15f0df75803e6ce13c6.png/resize/1200x110/" alt="" /></SwiperSlide>
        <SwiperSlide><img src="//static.eldorado.ru/upload/newbx/40e/40e88d941c9a23c8ffd77cb93e2f2a2c.png/resize/1200x110/" alt="" /></SwiperSlide>
      </Swiper></div>
      );
}

export default SliderLine;

