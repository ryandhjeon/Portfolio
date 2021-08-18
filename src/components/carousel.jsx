/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs ]);

const Carousel = ({ carousel }) => {
  const data = {carousel}
  const first = data.carousel.edges.slice(0,3)
  console.log(first)

  return (
    <React.Fragment>
      <Swiper
        lazy
        navigation
        pagination
        grabCursor
        sx={{
          zIndex: 0,
          mb: 5,
        }}
      >
        {first.map(({ node }) => (
          <SwiperSlide key={node.id}>
            <GatsbyImage image={getImage(node.childImageSharp.gatsbyImageData)} alt={node.base}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default Carousel