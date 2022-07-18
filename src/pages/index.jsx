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
import { FaInbox, FaFile, FaLinkedin, FaUserGraduate, FaAngleDown } from "react-icons/fa"

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
    <ContainerThree>
      <ContainerThreeInner/>
    </ContainerThree>
    </Layout>
  )
}

const ContainerOne = ({...props}) => (
  <Container
    {...props}
    sx={{
      textAlign: "center",
      justifyContent: "center",
      height: ["40vh", "60vh", "80vh"],
    }}
  >
    <div>
      <p sx={{
        fontSize: ["7", "12", "14"],
        letterSpacing: [16, 20, 30],
        fontWeight: "xs",
      }}>RYAN JEON</p>
      <p sx={{
        fontSize: [1, 3],
      }}><FaAngleDown/></p>
    </div>
  </Container>
)

const ContainerTwo = ({...props}) => (
  <Container
    {...props}
    sx={{
      bg: "pampas",
      color: "woodSmoke",
      a: {
        transition: "all 500ms",
        color: "woodSmoke",
        "&:hover": {
          bg: "schoolBus",
          borderRadius: "5em",
        },
      },
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
      flexWrap: ["wrap", "wrap", "nowrap"],
      alignItems: "center",
      justifyContent: ["center", "center", "space-between"],
      width: ["100%", "100%", "70%"],
  }}/>
)

const ImageLeft = ({...props}) => (
  <div
    {...props}
    sx={{
      maxWidth: ["15rem", "20rem"],
      maxHeight: ["15rem", "20rem"],
      pr: [0,0,5],
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
      lineHeight: 2,
      mt: 4,
    }}
  >
    <h2>Welcome!</h2> I am a Ph.D. student in Data Science at <a
    href="https://www.bgsu.edu/academics/graduate/data-science-phd.html" target='blank'>Bowling Green State
    University</a>.
    My research interests are in the areas of Natural Language Processing, and
    Graph Neural Network, Reinforcement Learning.
    I am also interested in a variety of application domains, especially in applying ML/DL models in Business
    analytics.

    <p>I earned my M.S. degree in Technology Management at <a
      href="https://giesbusiness.illinois.edu/mstm" target='blank'>University of Illinois at Urbana-Champaign</a>in May 2017 .</p>

    <p sx={{ mt: 4, textAlign: "center" }}>
      {data.allFile.edges.map((file, index) => {
        return (
          <LinkButton
            href={file.node.publicURL}
            rel="noopener noreferrer"
            target="_blank"
            sx={{ mr: 2 }}
            key={index}>
            <FaFile sx={{ fontSize: 2, pr: 2 }}/>
            CV
          </LinkButton>
        )
      })}
      <LinkButton
        href={"mailto:djeon@bgsu.edu"}
        target="_top"
        sx={{ mr: 2 }}
      >
        <FaInbox sx={{ fontSize: 2, pr: 2 }}/>
        Email
      </LinkButton>
      <LinkButton
        href={"https://www.linkedin.com/in/ryandhjeon/"}
        target="_blank"
        rel="noreferrer"
        sx={{ mr: 2 }}
      >
        <FaLinkedin sx={{ fontSize: 2, pr: 2 }}/>
        LinkedIn
      </LinkButton>
    </p>
  </div>
)

const ContainerThree = ({...props}) => (
  <Container
    {...props}
    sx={{
      bg: "pampas",
      color: "woodSmoke",
      display: "flex",
      // alignContent: "flex-start",
      a: {
        transition: "all 500ms",
        color: "woodSmoke",
        "&:hover": {
          bg: "schoolBus",
        },
      },
      "@media screen and (max-width: 64em)": {
        // justifyContent: "center",
      },
    }}
  />
)

const ContainerThreeInner = ({...props}) => (
  <div
    {...props}
    sx={{
      width: ["100%", "80%", "70%"],
      // bg: "#FFFFFF",
      // p: "1rem",
    }}>
    <h2>Latest News & Travels</h2>
    <div>
      <News
        date = "Aug. 2020"
        info = "test"
        emoji = "1F6EB"
        event = "started"
      />
      <p>
        <span sx={{ fontWeight: "700"}}>Aug. 2020</span>
        <span sx={{pl: 4}}><span sx={{pr: 2}}>{'\u{1F6EB}'}</span>Moved to <a href="https://www.bgsu.edu/academics/graduate/data-science-phd.html" target='blank'>Bowling Green State University</a> for Ph.D. in Data Science</span>
      </p>
      <p>
        <span sx={{ fontWeight: "700"}}>Aug. 2017</span>
        <span sx={{pl: 4}}><span sx={{pr: 2}}>{'\u{1F4BB}'}</span>Full Stack Developer @ <a href="https://aces.illinois.edu/" target='blank'>ACES, Univ. of Illinois at Urbana-Champaign</a></span>
        <Event>Began</Event>
      </p>
      <p>
        <span sx={{ fontWeight: "700"}}>Aug. 2017</span>
        <span sx={{pl: 4}}><span sx={{pr: 2}}>{'\u{1F393}'}</span>M.S. in Technology Management @ <a href="https://giesbusiness.illinois.edu/mstm" target='blank'>Univ. of Illinois at Urbana-Champaign</a></span>
        <Event>Earned</Event>
      </p>

    </div>
  </div>
)

const LinkButton = ({ ...props }) => (
  <a
    {...props}
    sx={{
       // border: "1px solid rgb(254, 221, 0, 1)",
       borderRadius: "10em",
       py: 3,
       px: 3,
       textDecoration: "none",
       fontSize: 1,
       fontWeight: "lg",
     }}/>
)

const Event = ({...props}) => (
  <span
    {...props}
    sx={{
      pl: 2,
      fontSize: 1,
      color: "green"
  }}/>
)

const News = ({...props}) => (
  <div {...props}>
    <span sx={{ fontWeight: "700"}}>{props.date}</span>
    <span sx={{pl: 4}}><span sx={{pr: 2}}>{"\\u{"+`${props.emoji}`+"}"}</span>{props.info}</span>
    <Event>{props.event}</Event>
  </div>
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
