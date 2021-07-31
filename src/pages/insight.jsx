/** @jsx jsx */
import React from 'react';
import { jsx, Image } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from 'react-seo-component';

import Layout from '../components/layout';
import Wrapper from '../components/wrapper';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allMdx(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            category
            date(formatString: "MMMM DD, YYYY")
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

const Insight = () => {
  const { author, description, image, siteUrl, siteLanguage, siteLocale, title, twitter } = useSiteMetadata();
  const data = useStaticQuery(query);
  const allPosts = data.allMdx.edges;

  const PostCard = () => (
    <div
      sx={{
        display: 'grid',
        mx: 'auto',
        maxWidth: '1040px',
        gridGap: 4,
        '@media screen and (min-width: 40em)': {
          gridTemplateColumns: `repeat(2, 1fr)`,
        },
        '@media screen and (min-width: 64em)': {
          gridTemplateColumns: `repeat(3, 1fr)`,
        },
      }}
    >
      {allPosts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          const pathToImage = getImage(post.frontmatter.cover)
          return (
            <div
              sx={{
                mb: 5,
                "@media screen and (max-width: 40em)": {
                  mb: 3,
                },
              }}
              key={index}
            >
              <Link
                to={post.frontmatter.path}
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  opacity: "0.5",
                  "&:hover": {
                    opacity: 1,
                    transition: "all 300ms",
                  },
                  "@media screen and (max-width: 40em)": {
                    opacity: 1,
                  },
                }}
              >
                {!!post.frontmatter.cover ? (
                  <GatsbyImage
                    image={pathToImage}
                    alt={post.frontmatter.title}
                    sx={{
                      // width: '100%'
                      opacity: "0.7",
                      height: "14rem",
                      mb: 3,
                      "&:hover": {
                        opacity: 1,
                        transition: "all 700ms",
                      },
                      "@media screen and (max-width: 40em)": {
                        opacity: 1,
                      },
                    }}
                  />
                ) : null}
                <div
                  sx={{
                    fontSize: "12px",
                    opacity: "0.8",
                    color: "schoolBus",
                    textTransform: "Uppercase",
                    mt: 4,
                  }}
                >
                  {post.frontmatter.category}
                </div>
                <div
                  sx={{
                    fontSize: "22px",
                    mt: 2,
                  }}
                >
                  {post.frontmatter.title}
                </div>
                <div
                  sx={{
                    fontSize: "12px",
                    color: "gullGray",
                    textTransform: "Uppercase",
                    mt: 2,
                  }}
                >
                  <div>{post.frontmatter.date}</div>
                  <div sx={{ mt: 2,}}>{author}</div>
                  {/*<p> • {post.timeToRead} min read</p>*/}
                </div>
              </Link>
            </div>
          )
        })}
    </div>
  );

  return (
    <Layout
      sx={{
        justifyContent: 'center',
      }}
    >
      <SEO
        title={title}
        description={description || `nothin’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitter={twitter}
      />
      <Wrapper>
        <div
          sx={{
            textAlign: 'center',
            my: 6,
          }}
        >
          <h1>Idea playground</h1>
          <p>Personal insights on the data science, programming, business strategy and branding</p>
        </div>
        <PostCard />
      </Wrapper>
    </Layout>
  );
};

export default Insight;