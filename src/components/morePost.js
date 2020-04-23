/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import FluidImage from "./fluidImage"
import { blogURI } from "../../globals"

const MorePost = (post) => {

const { author, uri, title, categories, date, content, tags, featuredImage, excerpt } = post

return (
  <div
    sx={{
      justifyContent: 'space-between',
      width: '1040px',
      mx: 'auto',
      py: 4,
      background: 'black',
    }}>
    <Link
      to={`${blogURI}/${uri}/`}
      sx={{
        mb: '4rem',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <FluidImage image={featuredImage}
                  sx={{
                    minHeight: '200px',
                    minWidth: '320px',
                    opacity: '0.8',
                  }}/>
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
          fontSize: '22px',
        }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: excerpt.split('.')[0]}}
        sx={{
          width: '320px',
          fontSize: '14px',
          color: 'gullGray'
        }}
      />
      <span
        dangerouslySetInnerHTML={{ __html: author.name }}
        sx={{
          fontSize: '12px',
          color: 'pampas',
          textTransform: 'Uppercase',
        }}
      />
      <span
        dangerouslySetInnerHTML={{ __html: ' • ' + date.split('T')[0] }}
        sx={{
          fontSize: '14px',
          color: 'gullGray',
          pb: 1,
        }}
      />
    </Link>
  </div>
  )
}

export default MorePost