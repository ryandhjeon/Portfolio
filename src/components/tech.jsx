/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs ]);

const TechSwiper = ({tech, post, ...props}) => {
  return (
    <div
      {...props}>
      <p sx={{ fontSize: 0 }}>TECH</p>
      {tech ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          lazy
          navigation
          sx={{ cursor: "grab", zIndex: "0" }}
        >
          {tech.map((tag, index) => (
            <SwiperSlide key={index}>
              <div
                sx={{
                  border: "1px solid lightGrey",
                  borderRadius: "10px",
                  textAlign: "center",
                  px: 3,
                  py: 3,
                  fontSize: 1,
                  "@media screen and (max-width: 40em)": {
                    fontSize: 0,
                    px: 1,
                  },
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