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
import { FaInbox, FaUserPlus } from "react-icons/fa"

const IndexPage = () => {
  const { description, title, image, siteUrl, siteLanguage, siteLocale, twitter } = useSiteMetadata()
  const data = useStaticQuery(query);

  return (
    <Layout>
      <SEO
        title={title}
        description={description || `nothing’`}
        image={`${siteUrl}${image}`}
        pathName={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitter={twitter}
      />
      <ContainerOne/>
      <ContainerTwo>
        <ContainerTwoInner>
          <ImageLeft/>
          <IntroRight data={data}/>
        </ContainerTwoInner>
      </ContainerTwo>
    </Layout>
  )
}

const ContainerOne = ({...props}) => (
  <Container
    {...props}
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
)

const ContainerTwo = ({...props}) => (
  <Container
    {...props}
    sx={{
      bg: "pampas",
      color: "woodSmoke",
      "@media screen and (max-width: 64em)": {
        justifyContent: "center",
      },
    }}
  />
)

const ContainerTwoInner = ({...props}) => (
  <div
    {...props}
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1040px",
      "@media screen and (max-width: 56em)": {
        justifyContent: "center",
      },
  }}/>
)

const ImageLeft = ({...props}) => (
  <div
    {...props}
    sx={{
      maxWidth: "20rem",
      maxHeight: "20rem",
      borderRadius: "50%",
      position: "relative",
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
        borderRadius: "50%",
        height: "auto",
        bottom: "0",
      }}
      src='../images/rj.jpg'
      alt='Ryan Jeon'
      quality={50}
    />
  </div>
)

const IntroRight = ({ data, ...props }) => (
  <div
    {...props}
    sx={{
      width: ["100%", "80%", "50%"],
      textAlign: "left",
      lineHeight: "2",
      fontSize: ["2", "3", "3"],
      a: {
        transition: "all 500ms",
        color: "woodSmoke",
        "&:hover": {
          bg: "schoolBus",
          borderRadius: "5em",
        },
      },
      mt: 4,
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
      <LinkButton
        href={"mailto:djeon@bgsu.edu"}
        target="_top"
        sx={{ mr: 2 }}
      >
        <FaInbox sx={{ fontSize: 1, pr: 1 }}/>
        djeon@bgsu.edu
      </LinkButton>
      {data.allFile.edges.map((file, index) => {
        return (
          <LinkButton
            href={file.node.publicURL}
            rel="noopener noreferrer"
            target="_blank"
            key={index}>
            <FaUserPlus sx={{ fontSize: 1, pr: 1 }}/>
            CV
          </LinkButton>
        )
      })}
    </p>
  </div>
)

const LinkButton = ({ ...props }) => (
  <a
    {...props}
    sx={{
       border: "1px solid rgb(254, 221, 0, 1)",
       borderRadius: "10em",
       py: 2,
       px: 3,
       textDecoration: "none",
       fontSize: 1,
       fontWeight: "lg",
     }}/>
)

export default IndexPage;

const query = graphql`
    {
        allFile(filter: { extension: { eq: "pdf" } }) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }
`
