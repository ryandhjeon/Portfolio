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
      }
    }
  `);

  return postsData;
};

export default usePostsQuery;
