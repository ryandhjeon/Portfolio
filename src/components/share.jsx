/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import TwitterIcon from '../images/svg/twitter.svg';
import FacebookIcon from '../images/svg/facebook.svg';
import LinkedinIcon from '../images/svg/linkedin.svg';

export const Share = () => (
  <div sx={{
    display: 'flex',
    alignItems: 'center',
  }}>
    <a
      href=""
      target="_blank"
      sx={{
        display: 'inline-block',
        width: '20px',
        height: '20px',
        fill: 'pampas',
        ml: 3,
        opacity: '0.7',
        '&:hover': {
          transition: 'all 0.2s',
          opacity: 1,
          fill: 'facebook',
        },
      }}
    >
      <FacebookIcon />
    </a>
    <a
      href=""
      target="_blank"
      sx={{
        display: 'inline-block',
        fill: 'pampas',
        ml: 3,
        width: '20px',
        height: '20px',
        opacity: '0.7',
        '&:hover': {
          opacity: 1,
          transition: 'all 0.2s',
          fill: 'linkedIn',
        },
      }}
    >
      <LinkedinIcon />
    </a>
    <a
      href=""
      target="_blank"
      sx={{
        display: 'inline-block',
        width: '20px',
        height: '20px',
        fill: 'pampas',
        ml: 3,
        opacity: '0.7',
        '&:hover': {
          opacity: 1,
          transition: 'all 0.2s',
          fill: 'twitter',
        },
      }}
    >
      <TwitterIcon />
    </a>
  </div>
);


