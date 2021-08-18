/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx, Box, Divider } from 'theme-ui';
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Wrapper from '../components/wrapper';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaEye } from "react-icons/fa"

const Projects = () => (
  <Layout>
    {/*<SEO title="Project"/>*/}
    <Wrapper
    sx={{
      mx: "auto",
      maxWidth: "56em",
    }}>
      <Quote/>
      <PostCards/>
    </Wrapper>
  </Layout>
)

const Quote = () => (
  <div
    sx={{
      my: "10em",
      textAlign: "center",
      fontSize: "3",
      fontWeight: "sm",
    }}>
    <p
      sx={{
        lineHeight: "2rem",
      }}>
      "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to
      trust
      that the dots will somehow connect in your future."
    </p>
    <i>- Steve Jobs</i>
  </div>
)

const PostCards = () => {
  const data = useStaticQuery(ALL_PROJECTS_QUERY);
  const allProjects = data.allMdx.edges;

  return (
    <>
      {allProjects
        .filter(project => project.node.frontmatter.title.length > 0)
        .map(({ node: project }, index) => {
          const pathToImage = getImage(project.frontmatter.cover)
          return (
            <Box
              sx={{
                my: "5",
                bg: "pampas",
                "@media screen and (min-width: 40em)": {
                  // borderRadius: "0 20px 20px 0",
                  my: "4",
                },
              }}
              key={index}>
              <Link
                to={project.frontmatter.path}
                sx={{
                  display: "flex",
                  textDecoration: "none",
                  color: "woodSmoke",
                  fontSize: "1",
                  opacity: 0.9,
                  transition: "all 700ms",
                  filter: "grayscale(100%)",
                  "&:hover": {
                    opacity: 1,
                    filter: "grayscale(10%)",

                  },
                  "@media screen and (max-width: 40em)": {
                    flexWrap: "wrap",
                  },
                }}>
                {!!project.frontmatter.cover ? (
                  <GatsbyImage
                    image={pathToImage}
                    alt={project.frontmatter.title}
                    sx={{
                      maxHeight: "10rem",
                      position: "relative",
                      overflow: "hidden",
                      display: "block",
                      width: "100%",
                      bottom: "0",
                      transition: "all 700ms",
                      "@media screen and (min-width: 40em)": {
                        flex: "0 0 12rem",
                      },
                    }}
                  />
                ) : null}
                <div sx={{
                  flex: 1,
                  px: "2",
                  py: "2",
                  "@media screen and (max-width: 40em)": {
                    px: "3",
                    py: "3",
                  },
                }}>
                  <div sx={{
                    fontSize: "4",
                    fontWeight: "lg",
                    mb: "2",
                    textTransform: "Uppercase",
                  }}>{project.frontmatter.title}
                  </div>
                  <div
                    sx={{
                      fontWeight: "md",
                      mb: "2",
                    }}>{project.frontmatter.date} · {project.frontmatter.author}
                  </div>
                  <Divider
                    sx={{
                      color: "schoolBus",
                      borderBottom: "2px solid",
                      opacity: "0.5",
                    }}/>
                  <div sx={{ fontWeight: "md" }}>
                    {project.frontmatter.description}
                  </div>
                </div>
              </Link>
            </Box>
          )
        })}
    </>
  )
}

export default Projects;

export const ALL_PROJECTS_QUERY = graphql`
    {
        allMdx(
            sort: {order: DESC, fields: [frontmatter___date]}
            filter: {frontmatter: {project: {eq: true}, published: {eq: true}}}
        ) {
            totalCount
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        author
                        description
                        date(formatString: "YYYY")
                        path
                        cover {
                            id
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH,
                                    placeholder: BLURRED,
                                    quality: 50
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`
