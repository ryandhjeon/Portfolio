/* eslint-disable */
/** @jsx jsx */
import React, {useState} from 'react';
import { jsx } from 'theme-ui';

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Lazy, Mousewheel, Zoom, Thumbs ]);

const Carousel = (props) => {
  const data = useStaticQuery(CAROUSEL_QUERY);

  return (
    <React.Fragment>
      <Swiper
        lazy
        mousewheel
        pagination
        grabCursor
        sx={{
          zIndex: "0",
          mb: 5,
        }}
      >
        {data.carousel.edges.map(({ node }) => (
          <div>{node.base}</div>
          // <SwiperSlide key={node.id}>
          //   <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base}/>
          // </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default Carousel

export const CAROUSEL_QUERY = graphql`
    query {
        carousel: allFile(
            filter: {
                extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                relativeDirectory: {eq: ""}
            }
            sort: {fields: base, order: ASC}
        ) {
            edges {
                node {
                    id
                    base
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`