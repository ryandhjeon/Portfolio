/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Footer = () => (
  <footer
    sx={{
      variant: 'layout.footer',
    }}
  >
    <div
      sx={{
        alignItems: 'baseline',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1040px',
        mx: 'auto',
        py: 4,
        '@media screen and (max-width: 64em)': {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <div
        sx={{
          flex: 1,
          '@media screen and (max-width: 64em)': {
            display: 'none',
          },
        }}
      >
        Built with{' '}
        <a href="https://www.gatsbyjs.org" target="__blank">
          GatsbyJS
        </a>{' '}
        &{' '}
        <a href={'https://www.netlify.com/'} target={'__blank'}>
          Netlify
        </a>
      </div>
      <div
        sx={{
          flex: 1,
          textAlign: 'center',
        }}
      >
        COPYRIGHT © {new Date().getFullYear()} <Link to="/">RYAN JEON</Link>
      </div>
      <div
        sx={{
          flex: 1,
          textAlign: 'right',
        }}
      >
        <a href="mailto:djeon@bgsu.edu">djeon@bgsu.edu</a>
      </div>
    </div>
  </footer>
);

export default Footer;
