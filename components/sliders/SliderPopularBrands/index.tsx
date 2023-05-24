import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";
import 'swiper/scss';
import styles from './SliderPopularBrands.module.scss';
import Link from 'next/link';
import {SiSamsung } from "react-icons/si";

const SliderPopularBrands = () => {
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={4}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={`mySwiper SliderPopularBrands`}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
      >
        <SwiperSlide><Link href = '/asd'><SiSamsung/></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><SiSamsung/></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><SiSamsung/></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><SiSamsung/></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><SiSamsung/></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><SiSamsung/></Link></SwiperSlide>
      </Swiper>
      );
}

export default SliderPopularBrands;