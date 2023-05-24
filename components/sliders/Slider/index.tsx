import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";
// Import Swiper styles
SwiperCore.use([Navigation,Autoplay])
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={
          true
        }
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mySwiperMain"
        autoplay={{ delay: 3000 }}
       
      >
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className= "sliderImg" src="/images/slider-img-3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
