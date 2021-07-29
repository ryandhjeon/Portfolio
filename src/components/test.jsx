// /** @jsx jsx */
// import { graphql, useStaticQuery } from 'gatsby'
// import React from 'react';
// import { jsx } from 'theme-ui'
//
// export const Testerer = () => {
//   const { data } = useStaticQuery(graphql`
//     query TestInfo {
//       site {
//         siteMetadata {
//             title
//         }
//       }
//     }
//   `)
//
//   const { title } = data.site.siteMetadata
//
//   return (
//     <h1 sx={{ color: 'white !important' }}>
//       { title }
//     </h1>
//   )
// }