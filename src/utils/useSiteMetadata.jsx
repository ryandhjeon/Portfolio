import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            siteLanguage
            siteLocale
            twitter
            linkedIn
            github
            author
            aboutAuthor
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

