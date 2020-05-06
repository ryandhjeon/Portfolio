import { graphql, useStaticQuery } from 'gatsby';

const useProjectQuery = () => {
  const projectData = useStaticQuery(graphql`
    query PROJECT_QUERY {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { project: { eq: true } } }) {
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

  return projectData;
};

export default useProjectQuery;
