import { graphql, useStaticQuery } from 'gatsby';

const usePostsQuery = () => {
  const postsData = useStaticQuery(graphql`
    query SITE_INDEX_QUERY {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { published: { eq: true } } }
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
                childImageSharp {
                  sizes(maxWidth: 2000, traceSVG: { color: "pampas" }) {
                    ...GatsbyImageSharpSizes_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return postsData;
};

export default usePostsQuery;
