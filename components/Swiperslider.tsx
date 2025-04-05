'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import Image from 'next/image';

import SliderImg1 from '../public/img/photo-1504751999194-ef177d837cfe.avif';
import SliderImg2 from '../public/img/photo-1534236161823-3897f68b00b8.avif';
import SliderImg3 from '../public/img/photo-1542549300-f44fe5ea9d82.avif';
import SliderImg4 from '../public/img/photo-1713190193924-8bd93c729b6b.avif';

const imageUrls = [SliderImg1, SliderImg2, SliderImg3, SliderImg4];

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={3} // Always show 3 columns
      navigation
      pagination={{ clickable: true }}
    >
      {imageUrls.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <Image
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            className="rounded-md w-full h-auto"
            placeholder="blur"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
