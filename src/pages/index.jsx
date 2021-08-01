/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { StaticImage } from "gatsby-plugin-image"

import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import { FaPercent, FaRegEnvelope, FaRing } from "react-icons/fa"

const IndexPage = () => {
  const { description, personalEmail, title, image, siteUrl, siteLanguage, siteLocale, twitter } = useSiteMetadata();
  const mailToUrl = `mailto:${personalEmail}?Subject=Hello`;

  return (
    <Layout
      sx={{
        flexDirection: "column",
      }}
    >
      <SEO
        title={title}
        description={description || `nothing’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitter={twitter}
      />
      <Container
        sx={{
          fontSize: "14",
          fontWeight: 'xs',
          textAlign: "center",
          justifyContent: "center",
          letterSpacing: 10,
          "@media screen and (max-width: 64em)": {
            fontSize: "12",
            fontWeight: 'xs',
            letterSpacing: 5,
            height: "300px",
          },
          "@media screen and (max-width: 40em)": {
            fontSize: "7",
            fontWeight: 'xs',
            letterSpacing: 5,
            height: "300px",
          },
        }}
      >
        <p>
          R Y A N<span>&nbsp;</span> J E O N
        </p>
      </Container>
      {/*<Container*/}
      {/*  sx={{*/}
      {/*    display: "none",*/}
      {/*    "@media screen and (max-width: 40em)": {*/}
      {/*      display: "flex",*/}
      {/*      fontSize: "5",*/}
      {/*      fontWeight: 'xs',*/}
      {/*      letterSpacing: 10,*/}
      {/*      height: "500px",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <span>R Y A N</span>*/}
      {/*  <span>J E O N</span>*/}
      {/*</Container>*/}
      <Container
        sx={{
          bg: "pampas",
          color: "woodSmoke",
        }}
      >
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            maxWidth: "1040px",
            "@media screen and (max-width: 64em)": {
              justifyContent: "center",
            },
          }}
        >
          <div
            sx={{
              height: "20rem",
              width: "20rem",
              borderRadius: "20%",
              overflow: "hidden",
              "@media screen and (max-width: 64em)": {
                maxWidth: "15rem",
                maxHeight: "15rem",
                mb: "4",
              },
            }}
          >
            <StaticImage
              src='../images/portfolio_about.jpg'
              alt='Ryan Jeon'/>
          </div>
          <div
            sx={{
              width: "50%",
              textAlign: "left",
              lineHeight: "2",
              fontSize: "3",
              a: {
                color: "woodSmoke",
                "&:hover": {
                  bg: "schoolBus",
                },
              },
              "@media screen and (max-width: 64em)": {
                width: "80%",
              },
              "@media screen and (max-width: 40em)": {
                width: "100%",
              },
            }}
          >
            <h3>Welcome!</h3> I am a Ph.D. student in Data Science at <a
            href="https://www.bgsu.edu/academics/graduate/data-science-phd.html" target='blank'>Bowling Green State
            University</a>.
            My research interests are in the areas of Natural Language Processing, and
            Graph Neural Network, Reinforcement Learning.
            I am also interested in a variety of application domains, especially in applying ML/DL models in Business
            analytics.
            I received my Master's degree in May 2017 in Technology Management from <a
            href="https://giesbusiness.illinois.edu/mstm" target='blank'>University of Illinois at Urbana-Champaign</a>.

            <p sx={{ mt: 4 }}>
              <a
                href={mailToUrl}
                target="_top"
                sx={{
                  border: "1px solid black",
                  p: 2,
                  mr: 3,
                  textDecoration: 'none',
                }}><FaRegEnvelope sx={{ fontSize: 1 }}/> djeon@bgsu.edu</a>
              <a
                sx={{
                  border: "1px solid black",
                  p: 2,
                  textDecoration: 'none',
                }}>CV(PDF)</a>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
};

export default IndexPage;
