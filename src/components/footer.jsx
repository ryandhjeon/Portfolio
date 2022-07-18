/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

export const Footer = () => (
  <footer
    sx={{
      variant: "layout.footer",
    }}
  >
    <div
      sx={{
        alignItems: "baseline",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1040px",
        mx: "auto",
        py: 4,
        "@media screen and (max-width: 64em)": {
          flexDirection: "column",
          alignItems: "center",
        },
        "@media screen and (max-width: 40em)": {
          fontWeight: "md",
        },
      }}
    >
      {/*<div*/}
      {/*  sx={{*/}
      {/*    flex: 1,*/}
      {/*    "@media screen and (max-width: 64em)": {*/}
      {/*      display: "none",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Powered by{" "}*/}
      {/*  <a href={"https://www.gatsbyjs.org"} target={"__blank"}>*/}
      {/*    GatsbyJS*/}
      {/*  </a>{" "}*/}
      {/*  &{" "}*/}
      {/*  <a href={"https://www.netlify.com/"} target={"__blank"}>*/}
      {/*    Netlify*/}
      {/*  </a>*/}
      {/*</div>*/}
      <div
        sx={{
          flex: 1,
          textAlign: "center",
        }}
      >
        Copyright © {new Date().getFullYear()} <Link to="/">Ryan Jeon</Link>
      </div>
      {/*<div*/}
      {/*  sx={{*/}
      {/*    flex: 1,*/}
      {/*    textAlign: "right",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <a href={"mailto:djeon@bgsu.edu"}>Contact</a>*/}
      {/*</div>*/}
    </div>
  </footer>
)

// export default Footer;