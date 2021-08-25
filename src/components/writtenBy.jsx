/* eslint-disable */
/** @jsx jsx */
import React, { useState, useEffect }  from 'react';
import { jsx, Divider } from 'theme-ui';
import { IoLogoGithub, IoMdMail, IoLogoLinkedin } from "react-icons/io"
import { RiLinkedinFill, RiMailAddFill, RiGithubFill } from "react-icons/ri"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import { useSiteMetadata } from '../utils/useSiteMetadata'

const WrittenBy = () => {
  const { author, aboutAuthor } = useSiteMetadata();

  return (
    <div sx={{ mt: 6 }}>
      <Divider sx={{ borderBottom: "1px solid lightgrey" }}/>
      <div sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        pt: 4,
      }}>
        <div
          sx={{
            // flex: [1, "0 12em"],
            textAlign: "center",
            px: [3, 4, 4],
          }}>
          <StaticImage
            sx={{
              filter: "grayscale(80%)",
              width: "8rem",
              borderRadius: "50%",
              height: "auto",
              bottom: "0",
            }}
            src='../images/rj.jpg'
            alt='Ryan Jeon'
            quality={50}
          />
        </div>
        <div
          sx={{
            // flex: 1,
            color: "grey",
          }}>
          <span sx={{
            fontSize: 0,
            textTransform: "uppercase",
          }}>Written by</span>
          <Link to={"/"} sx={{ textDecoration: "none" }}>
            <h2 sx={{
              color: "shark",
              fontSize: 4,
              textTransform: "uppercase",
              my: 2,
            }}>{author}</h2>
          </Link>
          <p sx={{
            lineHeight: 1.4
          }}>{aboutAuthor}</p>
          <span sx={{
            fontSize: 5,
            ">a": {
              mr: 3,
              transition: "all, 500ms",
              color: "shark",
              borderRadius: "50%",
              "&:hover": {
                cursor: "pointer",
                color: "schoolBus",
              },
            },
          }}>
            <a href="https://www.github.com/ryandhjeon" target="_blank" rel="noreferrer"><RiGithubFill/></a>
            <a href="https://www.linkedin.com/in/ryandhjeon" target="_blank" rel="noreferrer"><RiLinkedinFill/></a>
            <a href="mailto:ryandhjeon@gmail.com" rel="noreferrer"><RiMailAddFill/></a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default WrittenBy