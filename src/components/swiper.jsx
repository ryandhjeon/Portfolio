/* eslint-disable */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSiteMetadata } from '../utils/useSiteMetadata';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MdxSwiper = (props) => {
  const { image } = useSiteMetadata();
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`${image}projects/acesPortal/images/${i + 1}.jpg`}
          sx={{
            listStyle: 'none',
            width: '100%',
            height: '100%'
          }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
      <React.Fragment>
        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerVIew={1}
          onInit={(swiper) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
          }}
          onReachEnd={() => console.log('Swiper end reached')}
        >
          {slides}
      </Swiper>
    < /React.Fragment>
  )
}

export default MdxSwiper