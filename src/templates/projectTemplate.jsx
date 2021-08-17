/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx, Divider } from 'theme-ui';

import { graphql, Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Wrapper from '../components/wrapper';
import Carousel from "../components/carousel"
import { AiFillProject } from "react-icons/ai"

import { useSiteMetadata } from '../utils/useSiteMetadata';

const ProjectTemplate = ({ data, pageContext }) => {
  const { author } = useSiteMetadata();
  const { mdx: post } = data;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <OutsideWrapper>
        <Helmet title={`Project: ${post.frontmatter.title}`}/>
        <TitleContainer>
          <Title title={post.frontmatter.title}/>
          <Description description={post.frontmatter.description}/>
          <Information author={author} date={post.frontmatter.date}/>
        </TitleContainer>
        <InsideWrapper>
          <MainContainer>
            <Tech techs={post.frontmatter.tags}/>
            <Divider sx={{
              color: "lightGrey",
              mt: 3,
              mb: 5,
            }}/>
            <Carousel imagePath={post.frontmatter.images}/>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MainContainer>
        </InsideWrapper>
        <FloorContainer>
          <PrevNext
            previous={previous}
            next={next}
          />
          <MoreProjects/>
        </FloorContainer>
      </OutsideWrapper>
    </Layout>
  )
}

const OutsideWrapper = ({ ...props }) => (
  <section
    {...props}
    sx={{
      mt: 7,
      "@media screen and (max-width: 40em)": {
        mt: 6,
      },
    }}/>
)

const TitleContainer = ({ ...props }) => (
  <section
    {...props}
    sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    my: 7,
    "@media screen and (max-width: 40em)": {
      my: 6,
    },
  }}/>
)

const Title = ({title, ...props}) =>(
  <div
    {...props}
    sx={{
      textTransform: "Uppercase",
      fontSize: "7",
      mb: "4",
      "@media screen and (max-width: 56em)": {
        fontSize: "6",
      },
    }}>
    {title}
  </div>
)

const Description = ({description, ...props}) =>(
  <div
    {...props}
    sx={{
      fontSize: "2",
      opacity: "0.6",
      mb: "5",
      width: "50%",
      lineHeight: "1.5",
      "@media screen and (max-width: 56em)": {
        width: "70%",
        fontSize: "1",
      },
    }}>
    {description}
  </div>
)

const Information = ({ author, date, ...props }) => (
  <div
    {...props}
    sx={{
      fontSize: "1",
      color: "pampas",
      opacity: "0.8",
    }}>
    <Link
      to={"/"}
      sx={{
        color: "pampas",
        textDecoration: "none",
        "&hover": {
          color: "schoolBus",
        },
      }}>{author}</Link> · {date}
  </div>
)

const InsideWrapper = ({...props}) => (
  <Wrapper
    {...props}
    sx={{
      color: "woodSmoke",
      bg: "pampas",
      py: 6,
      "@media screen and (max-width: 40em)": {
        fontSize: "1",
        pt: 6,
      },
    }}
  />
)

const MainContainer = ({...props}) => (
  <section
    {...props}
    sx={{
      maxWidth: "700px",
      mx: "auto"
    }}
  />
)

const Tech = ({techs, ...props}) => (
  <div
    {...props}
  >
    {techs ? (
      <div>
        <p
          sx={{
            fontSize: 0,
          }}>TECH</p>
        {/*<Swiper*/}
        {/*  spaceBetween={10}*/}
        {/*  slidesPerView={4}*/}
        {/*  lazy*/}
        {/*  sx={{ cursor: "grab", zIndex: "0",}}*/}
        {/*>*/}
        {/*  {post.frontmatter.tags.map(tag => (*/}
        {/*    <SwiperSlide>*/}
        {/*      <div*/}
        {/*        sx={{*/}
        {/*          border: "1px solid lightGrey",*/}
        {/*          borderRadius: "10px",*/}
        {/*          textAlign: "center",*/}
        {/*          px: 3,*/}
        {/*          py: 3,*/}
        {/*          fontSize: 1,*/}
        {/*          "@media screen and (max-width: 40em)": {*/}
        {/*            fontSize: 0,*/}
        {/*            px: 1,*/}
        {/*          },*/}
        {/*        }}>*/}
        {/*        {tag}*/}
        {/*      </div>*/}
        {/*    </SwiperSlide>*/}
        {/*  ))}*/}
        {/*</Swiper>*/}
      </div>
    ) : null}
  </div>
)

const FloorContainer = ({...props}) => (
  <section
    {...props}
    sx={{
      bg: "woodSmoke",
      py: 5,
      textAlign: "center",
    }}
  />
)

const PrevNext = ({ previous, next, ...props }) => (
  <div
    {...props}
    sx={{
      display: "grid",
      mx: "auto",
      py: 5,
      gridGap: 1,
      "@media screen and (max-width: 56em)": {
        width: "100%",
        gridTemplateColumns: `repeat(1, 1fr)`,
      },
      "@media screen and (min-width: 56em)": {
        gridTemplateColumns: `repeat(2, 1fr)`,
      },
    }}
  >
    {previous === false ? null : (
      <>
        {previous && (
          <PrevNextBox path={previous} link={'previous'}/>
        )}
      </>
    )}
    {next === false ? null : (
      <>
      {next && (
        <PrevNextBox path={next} link={'next'}/>
      )}
      </>
    )}
  </div>
)

const PrevNextBox = ({ path, link, ...props }) => (
  <Link
    {...props}
    to={path.frontmatter.path}
    sx={{
      bg: "background",
      position: "relative",
      textDecoration: "none",
      p: "5",
      fontSize: "4",
      fontWeight: "md",
      transition: "all 500ms",
      "&:hover": {
        bg: "mineShaft",
      },
    }}
  >
    <div
      sx={{
        color: "schoolBus",
        fontSize: "1",
        fontWeight: "sm",
        pb: "3",
        opacity: "0.8",
      }}>{path.frontmatter.date}
    </div>
    <div
      sx={{
        textTransform: "uppercase",
        color: "pampas",
      }}
    >
      {path.frontmatter.title}
    </div>
    <div
      sx={{
        fontSize: "2",
        color: "gullGray",
        pt: "2",
        maxWidth: "70%",
        fontWeight: "sm",
        mx: "auto",
        "@media screen and (max-width: 40em)": {
          fontWeight: "md",
        },
      }}
    >
      {path.frontmatter.description}
    </div>
  </Link>
)

const MoreProjects = ({ ...props }) => (
  <Link
    {...props}
    to={"/project"}
    sx={{
      bg: "background",
      py: "3",
      px: "5",
      textDecoration: "none",
      transition: "all 500ms",
      "&:hover": {
        bg: "mineShaft",
      },
    }}>
      <span
        sx={{
          fontSize: "1",
          color: "schoolBus",
          opacity: "0.8",
          fontWeight: "md",
          textTransform: "uppercase",
        }}>More projects</span>
  </Link>
)

export const PROJECT_QUERY = graphql`
    query($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            timeToRead
            frontmatter {
                title
                path
                category
                description
                date(formatString: "YYYY")
                tags
                images
                cover {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH,
                            placeholder: BLURRED,
                            transformOptions: {grayscale: true},
                            quality: 50
                        )
                    }
                }
            }
        }
    }
`

export default ProjectTemplate;




{/*<div*/}
{/*  sx={{*/}
{/*    display: 'flex',*/}
{/*    justifyContent: 'space-between',*/}
{/*    mt: 6,*/}

{/*  }}*/}
{/*>*/}
{/*  {post.frontmatter.tags ? (*/}
{/*    <div>*/}
{/*      <ul*/}
{/*        sx={{*/}
{/*          display: 'flex',*/}
{/*          listStyleType: 'none',*/}
{/*          m: 0,*/}
{/*        }}*/}
{/*      >*/}
{/*        {post.frontmatter.tags.map(tag => (*/}
{/*          <li key={tag + `tag`}>*/}
{/*            <Link*/}
{/*              sx={{*/}
{/*                mr: 2,*/}
{/*                p: 2,*/}
{/*                fontSize: '12px',*/}
{/*                textTransform: 'uppercase',*/}
{/*                borderRadius: 3,*/}
{/*                textAlign: 'center',*/}
{/*                '&:hover': {*/}
{/*                  bg: 'dimgray',*/}
{/*                },*/}
{/*              }}*/}
{/*              to={`/tags/${kebabCase(tag)}/`}*/}
{/*            >*/}
{/*              # {tag}*/}
{/*            </Link>*/}
{/*          </li>*/}
{/*        ))}*/}
{/*      </ul>*/}
{/*    </div>*/}
{/*  ) : null}*/}
{/*  <Share />*/}
{/*</div>*/}