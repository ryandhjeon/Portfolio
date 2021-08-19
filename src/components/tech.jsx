/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs, Virtual } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import {BsGearFill} from 'react-icons/bs'

SwiperCore.use([Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs, Virtual ]);

const TechSwiper = ({tech, post, ...props}) => {
  return (
    <div
      {...props}>
      <p sx={{ fontSize: 0 }}>#TECH</p>
      {tech ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          lazy
          navigation
          grab
          sx={{ cursor: "grab", zIndex: "0" }}
        >
          {tech.map((tag, index) => (
            <SwiperSlide key={index}>
              <div
                sx={{
                  border: "1px solid lightGrey",
                  borderRadius: "10px",
                  textAlign: "center",
                  px: [1, 3, 3],
                  py: 3,
                  fontSize: [0, 1, 1],
                }}>
                {tag}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  )
}

export default TechSwiper