// /** @jsx jsx */
// import React from 'react';
// import { jsx, Divider } from 'theme-ui';
//
// import { graphql, Link } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
// import Img from 'gatsby-image';
//
// import { Helmet } from 'react-helmet';
// import kebabCase from 'lodash/kebabCase';
//
// import { useSiteMetadata } from '../utils/useSiteMetadata';
// import Layout from '../components/layout';
// import Wrapper from '../components/wrapper';
// import { Share } from '../components/share';
//
// export default function Template({ data, pageContext }) {
//   const { description, author } = useSiteMetadata();
//   const { mdx: post } = data;
//   const { previous, next } = pageContext;
//
//   return (
//     <Layout>
//       <div
//         sx={{
//           mt: 6,
//         }}
//       >
//         <Helmet title={`INSIGHT - ${post.frontmatter.title}`} />
//         <div
//           sx={{
//             textAlign: 'center',
//             letterSpacing: '0.1rem',
//             textTransform: 'Uppercase',
//           }}
//         >
//           <div
//             sx={{
//               fontSize: '12px',
//               color: 'pampas',
//               opacity: '0.8',
//               mb: 5,
//             }}
//           >
//             <span>
//               {post.frontmatter.date} · <Link to={'/about'}>{author}</Link>
//             </span>
//           </div>
//           <div
//             sx={{
//               mb: 5,
//             }}
//           >
//             <div
//               sx={{
//                 fontSize: '3rem',
//               }}
//             >
//               {post.frontmatter.title}
//             </div>
//             <div
//               sx={{
//                 opacity: '0.8',
//                 fontSize: '12px',
//               }}
//             >
//               [{post.frontmatter.description}]
//             </div>
//           </div>
//         </div>
//         {!!post.frontmatter.cover ? (
//           <Img
//             sizes={post.frontmatter.cover.childImageSharp.fluid}
//             sx={{
//               width: '1040px',
//               height: '20rem',
//               mb: 5,
//               mx: 'auto',
//               '@media screen and (max-width: 56em)': {
//                 maxWidth: '100%',
//               },
//             }}
//           />
//         ) : null}
//         <Wrapper
//           sx={{
//             width: '40em',
//             mx: 'auto',
//             '@media screen and (max-width: 56em)': {
//               maxWidth: '100%',
//             },
//           }}
//         >
//           <div
//             sx={{
//               fontSize: '12px',
//               opacity: '0.8',
//               color: 'schoolBus',
//               textTransform: 'Uppercase',
//               textAlign: 'right',
//             }}
//           >
//             {post.frontmatter.category} · {post.timeToRead} min read
//           </div>
//           <Divider
//             sx={{
//               opacity: '0.3',
//               mb: 4,
//             }}
//           />
//           <MDXRenderer>{post.body}</MDXRenderer>
//           <div
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               mt: 6,
//
//             }}
//           >
//             {post.frontmatter.tags ? (
//               <div>
//                 <ul
//                   sx={{
//                     display: 'flex',
//                     listStyleType: 'none',
//                     m: 0,
//                   }}
//                 >
//                   {post.frontmatter.tags.map(tag => (
//                     <li key={tag + `tag`}>
//                       <Link
//                         sx={{
//                           mr: 2,
//                           p: 2,
//                           fontSize: '12px',
//                           textTransform: 'uppercase',
//                           borderRadius: 3,
//                           textAlign: 'center',
//                           '&:hover': {
//                             bg: 'dimgray',
//                           },
//                         }}
//                         to={`/tags/${kebabCase(tag)}/`}
//                       >
//                         # {tag}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : null}
//             <Share />
//           </div>
//         </Wrapper>
//         <div
//           sx={{
//             bg: 'woodSmoke',
//             mt: 4,
//             py: 5,
//             textAlign: 'center',
//           }}
//         >
//           <span sx={{ textTransform: 'uppercase' }}>Insights de Ryan</span>
//           <div
//             sx={{
//               display: 'grid',
//               // width: '1040px',
//               mx: 'auto',
//               py: 5,
//               gridGap: 1,
//               '@media screen and (max-width: 40em)': {
//                 width: '100%',
//                 gridTemplateColumns: `repeat(1, 1fr)`,
//               },
//               '@media screen and (min-width: 40em)': {
//                 gridTemplateColumns: `repeat(2, 1fr)`,
//               },
//             }}
//           >
//             {previous === false ? null : (
//               <>
//                 {previous && (
//                   <Link
//                     to={previous.frontmatter.path}
//                     sx={{
//                       position: 'relative',
//                       '&:hover': {
//                         transition: 'all 0.3s',
//                         transform: 'translate(-7px, 0px)',
//                         '>span': {
//                           visibility: 'visible',
//                         },
//                       },
//                     }}
//                   >
//                     <span
//                       sx={{
//                         position: 'absolute',
//                         left: 0,
//                         opacity: '0.8',
//                         color: 'schoolBus',
//                         visibility: 'hidden',
//                       }}
//                     >
//                       ◅
//                     </span>
//                     <div
//                       sx={{
//                         textAlign: 'center',
//                       }}
//                     >
//                       {!!previous.frontmatter.cover ? (
//                         <Img
//                           sizes={previous.frontmatter.cover.childImageSharp.sizes}
//                           sx={{
//                             width: '100%',
//                             height: '14rem',
//                             mb: 3,
//                             opacity: '0.5',
//                             '&:hover': {
//                               opacity: '1',
//                               transition: 'all 500ms',
//                             },
//                           }}
//                         />
//                       ) : null}
//                       {previous.frontmatter.title}
//                       <div
//                         sx={{
//                           fontSize: '12px',
//                           color: 'gullGray',
//                           opacity: '0.8',
//                           textTransform: 'uppercase',
//                         }}
//                       >
//                         {previous.frontmatter.date}
//                         {previous.frontmatter.description}
//                       </div>
//                     </div>
//                   </Link>
//                 )}
//               </>
//             )}
//             {/*<div>*/}
//             {/*  <Link to={'/insight'} sx={{ textAlign: 'center' }}>*/}
//             {/*    <div*/}
//             {/*      sx={{*/}
//             {/*        textAlign: 'center',*/}
//             {/*        '&:hover': {*/}
//             {/*          transition: 'all 0.5s',*/}
//             {/*          transform: 'translate(0px, 3px)',*/}
//             {/*        },*/}
//             {/*      }}*/}
//             {/*    >*/}
//             {/*      <span>More readings</span>*/}
//             {/*      <div*/}
//             {/*        sx={{*/}
//             {/*          fontSize: '12px',*/}
//             {/*          color: 'gullGray',*/}
//             {/*          opacity: '0.8',*/}
//             {/*          textTransform: 'uppercase',*/}
//             {/*        }}*/}
//             {/*      >*/}
//             {/*        {description}*/}
//             {/*      </div>*/}
//             {/*    </div>*/}
//             {/*  </Link>*/}
//             {/*</div>*/}
//             {next === false ? null : (
//               <>
//                 {next && (
//                   <Link
//                     to={next.frontmatter.path}
//                     sx={{
//                       position: 'relative',
//                       '&:hover': {
//                         transition: 'all 0.3s',
//                         transform: 'translate(7px, 0px)',
//                         '>span': {
//                           visibility: 'visible',
//                         },
//                       },
//                     }}
//                   >
//                     <span
//                       sx={{
//                         position: 'absolute',
//                         right: 0,
//                         opacity: '0.8',
//                         color: 'schoolBus',
//                         visibility: 'hidden',
//                       }}
//                     >
//                       {' '}
//                       ▻{' '}
//                     </span>
//                     <div
//                       sx={{
//                         textAlign: 'center',
//                       }}
//                     >
//                       {next.frontmatter.title}
//                       <div
//                         sx={{
//                           fontSize: '12px',
//                           color: 'gullGray',
//                           opacity: '0.8',
//                           textTransform: 'uppercase',
//                         }}
//                       >
//                         {next.frontmatter.date}
//                         {next.frontmatter.description}
//                       </div>
//                     </div>
//                   </Link>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
//
// export const postQuery = graphql`
//   query BlogPostByPath($path: String!) {
//       mdx(frontmatter: { path: { eq: $path } }) {
//           body
//           timeToRead
//           frontmatter {
//               title
//               path
//               category
//               description
//               date(formatString: "MMMM Do, YYYY")
//               tags
//               cover {
//                   childImageSharp {
//                       fluid(maxWidth: 2000) {
//                           ...GatsbyImageSharpFluid_tracedSVG
//                       }
//                   }
//               }
//           }
//       }
//   }
// `;
