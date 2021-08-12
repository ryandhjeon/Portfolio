/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Wrapper from '../components/wrapper';
import { useSiteMetadata } from "../utils/useSiteMetadata"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const projectQuery = graphql`
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
                                    transformOptions: {grayscale: true},
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

const Projects = () => {
  const data = useStaticQuery(projectQuery);
  const allProjects = data.allMdx.edges;

  const PostCard = () => (
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
                  borderRadius: '0 20px 20px 0',
                  my: "4",
                }
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
                  "&:hover": {
                    opacity: 1,
                  },
                  "@media screen and (max-width: 40em)": {
                    flexWrap: "wrap",
                  }
                }}>
                {!!project.frontmatter.cover ? (
                  <GatsbyImage
                    image={pathToImage}
                    alt={project.frontmatter.title}
                    sx={{
                      // height: '30%',
                      width: '100%',
                      "@media screen and (min-width: 40em)": {
                        flex: '0 0 12rem',
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
                  <div sx={{ fontSize: '4', fontWeight: "lg", mb: "2", textTransform: "Uppercase" }}>{project.frontmatter.title}</div>
                  <div sx={{ fontWeight: "md", mb: "2" }}>{project.frontmatter.date} · {project.frontmatter.author}</div>
                  <div sx={{ fontWeight: "md" }}>{project.frontmatter.description}</div>
                </div>
              </Link>
            </Box>
          )
        })}
    </>
  )

  return (
    <Layout>
      <SEO title="Project"/>
      <Wrapper
        sx={{
          maxWidth: "56em",
          mx: "auto",
          my: 6,
        }}
      >
        <div
          sx={{
            mx: "auto",
            my: "10em",
            textAlign: "center",
            fontSize: "3",
            fontWeight: "sm",
            maxWidth: "40em",
          }}>
          <h1 sx={{ fontWeight: "md" }}>projets intéressants</h1>
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
        <PostCard/>
      </Wrapper>
    </Layout>
  )
};

export default Projects;
