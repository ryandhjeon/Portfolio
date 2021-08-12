/* eslint-disable */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import { FaRegEnvelope } from "react-icons/fa"

const IndexPage = () => {
  const { description, personalEmail, title, image, siteUrl, siteLanguage, siteLocale, twitter } = useSiteMetadata();
  const mailToUrl = `mailto:${personalEmail}?Subject=Hello`;

  const data = useStaticQuery(graphql`
      {
          allFile(filter: { extension: { eq: "pdf" } }) {
              edges {
                  node {
                      publicURL
                  }
              }
          }
      }
  `)

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
        pathName={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitter={twitter}
      />
      <Container
        sx={{
          textAlign: "center",
          justifyContent: "center",
          "@media screen and (max-width: 56em)": {
            height: "200px",
          },
        }}
      >
        <p
          sx={{
            fontSize: "14",
            fontWeight: "xs",
            letterSpacing: 30,
            "@media screen and (max-width: 64em)": {
              fontSize: "12",
              letterSpacing: 20,
            },
            "@media screen and (max-width: 40em)": {
              fontSize: "7",
              letterSpacing: 16,
            },
          }}>
          RYAN JEON
        </p>
      </Container>
      <Container
        sx={{
          bg: "pampas",
          color: "woodSmoke",
          "@media screen and (max-width: 64em)": {
            justifyContent: "center",
          },
        }}
      >
        <div sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1040px",
          "@media screen and (max-width: 64em)": {
            justifyContent: "center",
          },
        }}>
          <div
          sx={{
            overflow: 'hidden',
            maxWidth: "20rem",
            maxHeight: "20rem",
            borderRadius: "10%",
            position: 'relative',
            "@media screen and (max-width: 56em)": {
              maxWidth: "15rem",
              maxHeight: "15rem",
            },
          }}>
            <StaticImage
              sx={{
                filter: "grayscale(100%)",
                display: "block",
                width: "100%",
                height: 'auto',
                bottom: "0",
              }}
              src='../images/rj.jpg'
              alt='Ryan Jeon'
              quality={50}
            />
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
                mt: 4,
                width: "80%",
              },
              "@media screen and (max-width: 40em)": {
                mt: 4,
                width: "100%",
                fontSize: "2",
              },
            }}
          >
            <h4>Welcome!</h4> I am a Ph.D. student in Data Science at <a
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
                  textDecoration: "none",
                }}><FaRegEnvelope sx={{ fontSize: 1 }}/> djeon@bgsu.edu</a>
              {data.allFile.edges.map((file, index) => {
                return (
                  <a
                    href={file.node.publicURL}
                    download
                    sx={{
                      border: "1px solid black",
                      p: 2,
                      textDecoration: "none",
                    }}>
                    CV (PDF)
                  </a>
                )
              })}
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
};

export default IndexPage;
