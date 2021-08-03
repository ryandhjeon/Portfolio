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
                                    layout: FULL_WIDTH
                                    placeholder: BLURRED
                                    transformOptions: {grayscale: true}
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
                  my: "4",
                }
              }}
              key={index}>
              <Link
                to={project.frontmatter.path}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  textDecoration: "none",
                  color: "woodSmoke",
                  fontSize: "1",
                  "@media screen and (min-width: 40em)": {
                    ":hover": {
                      transition: "400ms",
                      left: 0,
                      borderRight: "2rem solid #FEDD00",
                    },
                  },
                }}>
                {!!project.frontmatter.cover ? (
                  <GatsbyImage
                    image={pathToImage}
                    alt={project.frontmatter.title}
                    sx={{
                      height: "100%",
                      width: "12rem",
                      "@media screen and (max-width: 40em)": {
                        height: "100%",
                        width: "100%",
                      },
                    }}
                  />
                ) : null}
                <div sx={{
                  textAlign: "left",
                  p: "2",
                }}>
                  <div sx={{ fontWeight: "lg", mb: "2" }}>{project.frontmatter.title}</div>
                  <div sx={{}}>{project.frontmatter.author}</div>
                  <div sx={{}}>{project.frontmatter.date}</div>
                  <div><span sx={{ fontWeight: "md" }}>Brief description:</span> {project.frontmatter.description}</div>
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
          textAlign: "center",
          fontSize: "3",
          fontWeight: "sm",
          maxWidth: "40em",
          mx: "auto",
          my: 6,
        }}
      >
        <p sx={{ lineHeight: "2rem" }}>
          "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust
          that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life,
          karma, whatever. This approach has never let me down, and it has made all the difference in my life."
        </p>
        <i>- Steve Jobs</i>
        <PostCard/>
      </Wrapper>
    </Layout>
  )
};

export default Projects;
