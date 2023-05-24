import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";
import 'swiper/scss';
import Link from 'next/link';
const SliderProductTwo = () => {
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={5}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={`mySwiper SliderProductTwo`}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
      >
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href = '/asd'><img src="	https://static.eldorado.ru/upload/newbx/14f/14fe35df6b1e3e60b110399dc8c48cfd.png/resize/220x300/" alt="" /></Link></SwiperSlide>
      </Swiper>
      );
}

export default SliderProductTwo;











