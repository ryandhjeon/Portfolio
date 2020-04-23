/** @jsx jsx */
import React from "react"
import { useEffect } from "react"
import { jsx, Button } from "theme-ui"
import Prism from "prismjs"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FluidImage from "../../components/fluidImage"
import PostEntry from "../../components/postEntry"
import Wrapper from "../../components/wrapper"
import Container from "../../components/container"

import TwitterIcon from "../../images/svg/twitter.svg";
import FacebookIcon from "../../images/svg/facebook.svg";
import LinkedinIcon from "../../images/svg/linkedin.svg";

const Post = ({ pageContext }) => {
  const {
    post: { title, tags, slug, content, featuredImage, author, categories, date, excerpt },
    nodes
  } = pageContext

  const d = new Date(date)

  class Tag extends React.Component {
    render() {
      return (
        <span>
          {tags.nodes.map(tag =>
            <Button
            sx={{
              fontSize: 1,
              fontWeight: 100,
              p: 2,
              mr: 2,
              border: 'none',
              color: 'gullGray',
              bg: 'woodSmoke',
              cursor: 'pointer',
            }}
            key={tag.id}>{tag.name}</Button>)}
        </span>
      )
    }
  }

  class Share extends React.Component {
    render() {
      return (
        <span
        sx={{
          justifyContent: 'center',
        }}>
         <a href="" target="_blank">
            <TwitterIcon sx={{
              display: 'inline-block',
              width: '25px',
              height: '25px',
              fill: 'gullGray',
            }}>Twitter</TwitterIcon>
         </a>
          <FacebookIcon sx={{
            display: 'inline-block',
            width: '25px',
            height: '25px',
            fill: 'gullGray',
            ml: 3,
          }}
            href="">LinkedIn</FacebookIcon>
          <LinkedinIcon sx={{
            display: 'inline-block',
            width: '25px',
            height: '25px',
            fill: 'gullGray',
            ml: 3,
          }}
            href="">Facebook</LinkedinIcon>
        </span>
      )
    }
  }

  return (
    <Layout>
      <SEO title={title}/>
         <div
         sx={{
           width: '680px',
           mx: 'auto',
           mb: 4,
         }}>
           <div
             dangerouslySetInnerHTML={{ __html: categories.nodes[0].name }}
             sx={{
               mt: 3,
               fontSize: '12px',
               color: 'schoolBus',
               textTransform: 'Uppercase',
             }}
           />
           <div
             dangerouslySetInnerHTML={{ __html: title }}
             sx={{
               fontSize: '55px',
             }}/>
           <div
             dangerouslySetInnerHTML={{ __html: excerpt.split(', 1')}}
             sx={{
               fontSize: '22px',
               color: 'gullGray',
             }}/>
           <a href="/about">
             <span
             dangerouslySetInnerHTML={{ __html: ' ' + author.name }}
             sx={{
               fontSize: '14px',
               textTransform: 'Uppercase',
             }}/>
           </a>

           <span
             dangerouslySetInnerHTML={{ __html: ' • ' + d.toDateString() }}
             sx={{
               fontSize: '14px',
               color: 'gullGray',
             }}/>
         </div>
           <FluidImage
             image={featuredImage}
             sx={{
               maxWidth: '1040px',
               mx: 'auto',
               mb: 5,
             }}
           />
          <div
            sx={{
              width: '680px',
              mx: 'auto',
            }}>
             <div
               dangerouslySetInnerHTML={{ __html: content }}
               sx={{
                 fontSize: '20px',
                 fontWeight: '100',
                 color: 'primaryText',
                 textAlign: 'justify',
                 borderTop: '1px solid dimgray',
                 mt: 4,
                 pt: 4,
                 blockquote: {
                   color: 'pampas',
                   fontStyle: 'italic',
                   borderLeft: '3px solid tan',
                   fontSize: 2,
                   my: 4,
                 },
                 li: {
                   listStyleType: 'none',
                 },
                 ul: {
                   ml: 0,
                 },
                 figure: {
                   my: 4,
                 }
               }}
             />
            <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 5,
            }}>
              <Tag />
              <Share />
            </div>
          </div>
        <Wrapper
        sx={{
          bg: 'woodSmoke',
          borderBottom: '1px solid dimgray',
          mt: 5,
        }}>
        </Wrapper>
    </Layout>
  )
}

export default Post