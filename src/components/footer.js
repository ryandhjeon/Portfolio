/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

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
          flexGrow: 1,
          '@media screen and (max-width: 64em)': {
            display: 'none',
          },
        }}
      >
        Built with GatsbyJS & Netlify
      </div>
      <div
        sx={{
          flexGrow: 1,
          textAlign: 'center',
        }}
      >
        COPYRIGHT © {new Date().getFullYear()} <a href="/">RYAN JEON</a>
      </div>
      <div
        sx={{
          flexGrow: 1,
          textAlign: 'right',
        }}
      >
        <a href="mailto:ryandhjeon@gmail.com">
          <span
            sx={{
              color: 'gullGray',
              textDecoration: 'none',
              '&:hover': {
                color: 'tan',
              },
            }}
          >
            ryandhjeon@gmail.com
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
