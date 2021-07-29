const siteMetadata = {
  title: `Maison De Ryan`,
  description: `Ryan's daily note`,
  author: `Ryan Jeon`,
  image: ``,
  siteUrl: `https://www.ryanjeon.com`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitter: `ryandhjeon`,
  linkedIn: `ryandhjeon`,
  github : `ryandhjeon`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maison de Ryan`,
        short_name: `Ryan Jeon`,
        start_url: `/`,
        icon: `src/images/memoji_white.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'insight',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `${__dirname}/src/projects`,
      },
    },
  ],
};
