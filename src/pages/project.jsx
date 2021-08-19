/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx, Box, Divider } from 'theme-ui';
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Wrapper from '../components/wrapper';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = () => {
  const data = useStaticQuery(ALL_PROJECTS_QUERY);
  const allProjects = data.allMdx.edges;

  return (
    <Layout>
      {/*<SEO title="Project"/>*/}
      <Wrapper
        sx={{
          mx: "auto",
          maxWidth: "56em",
        }}>
        <Quote/>
        <PostCards allProjects={allProjects}/>
      </Wrapper>
    </Layout>
  )
}

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
      "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust
      that the dots will somehow connect in your future."
    </p>
    <i>- Steve Jobs</i>
  </div>
)

const PostCards = ({ allProjects }) => (
  <>
    {allProjects
      .filter(project => project.node.frontmatter.title.length > 0)
      .map(({ node: project }, index) => {
        return (
          <Link
            key={index}
            to={project.frontmatter.path}
            sx={{
              display: "flex",
              bg: "pampas",
              my: "4",
              textDecoration: "none",
              color: "woodSmoke",
              fontSize: "1",
              opacity: 0.9,
              transition: "all 700ms",
              filter: ["grayscale(50%)", "grayscale(80%)", "grayscale(80%)"],
              "&:hover": {
                opacity: 1,
                filter: "grayscale(0%)",
              },
            }}>
            {!!project.frontmatter.cover ? (
              <GatsbyImage
                image={getImage(project.frontmatter.cover)}
                alt={project.frontmatter.title}
                sx={{
                  height: "12rem",
                  transition: "all 700ms",
                  flex: ["0 0 8em", "0 0 12em", "0 0 12em"],
                }}
              />
            ) : null}
            <div sx={{
              flex: 1,
              px: 3,
            }}>
              <h3 sx={{
                fontSize: ["default", 4, 4],
                mb: [1, 2, 2],
                textTransform: "Uppercase",
              }}>{project.frontmatter.title}
              </h3>
              <p
                sx={{
                  my: 1,
                }}>{project.frontmatter.date} · {project.frontmatter.author}
              </p>
              <Divider
                sx={{
                  color: "schoolBus",
                  borderBottom: "2px solid",
                  opacity: "0.5",
                }}/>
              <p sx={{
                my: ["default", 1],
                fontSize: ["default", 2],
              }}>
                {project.frontmatter.description}
              </p>
            </div>
          </Link>
        )

      })}
  </>
)


export default Projects;

const ALL_PROJECTS_QUERY = graphql`
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
