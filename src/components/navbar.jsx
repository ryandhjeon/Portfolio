/* eslint-disable */
/** @jsx jsx */
import React, { useState, useEffect }  from 'react';
import { jsx, Divider } from 'theme-ui';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';

const MenuLinks = () => {
  return (
    <ul
      sx={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
        fontSize: '1',
        fontWeight: 'md',
        '@media screen and (max-width: 640px)': {
          display: 'none',
        },
      }}
    >
      <li
        sx={{
          mb: '0 !important',
        }}
      >
        <Link to={'/'}>About</Link>
      </li>
      <li
        sx={{
          mb: '0 !important',
          ml: 3,
        }}
      >
        <Link to={'/project'}>Projects</Link>
      </li>
      {/*<li*/}
      {/*  sx={{*/}
      {/*    mb: '0 !important',*/}
      {/*    ml: 3,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Link to={'/insight'}>Insights</Link>*/}
      {/*</li>*/}
    </ul>
  );
};

export const Navbar = ({ siteTitle }) => {
  const [nav, showNav] = useState(0);

  useEffect(() => {
    const html = document.querySelector('html')
    nav ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible')
  }, [nav])

  return (
    <Headroom>
      <div sx={{ bg: 'navBackground'}}>
        <header sx={{ variant: 'layout.header' }}>
          <Link
            to="/"
            sx={{
              fontWeight: 'md',
              fontSize: '2',
              ':hover': {
                color: 'white !important'
              }
            }}
          >
            {siteTitle}
          </Link>
          <MenuLinks />
          <button
            onClick={() => showNav(!nav)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              p: 0,
              height: '1.2rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 5,
              '@media screen and (min-width: 641px)': {
                display: 'none',
              },
              'div': {
                width: '1.3rem',
                height: '.05rem',
                background: 'white',
                borderRadius: '5px',
                transformOrigin: '1px',
                transition: 'transform 300ms, opacity 300ms',
                ':first-of-type': {
                  transform: $nav => nav ? "rotate(45deg)" : "rotate(0deg) + console.log('TEST')"
                },
                ':nth-of-type(2)': {
                  opacity: $nav => nav ? "0" : "1"
                },
                ':nth-of-type(3)': {
                  opacity: $nav => nav ? "0" : "1"
                },
                ':nth-of-type(4)': {
                  transform: $nav => nav ? "rotate(-45deg)" : "rotate(0)"
                }
              }
            }}
          >
            <div />
            <div />
            <div />
            <div />
          </button>
          <nav
            // nav={nav}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100vh',
              width: '100%',

              bg: 'background',

              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',

              transition: 'transform 400ms',
              transform: $nav => nav ? "translateY(0)" : "translateY(-100%)"
            }}
          >
            <ul sx={{
              listStyleType: 'none',
              ml: 0,
              pl: 0,
              mt: 6,
              'li': {
                mt: '1rem',
                lineHeight: '3rem',
              },
              'a': {
                textDecoration: 'none',
                color: 'pampas',
                fontSize: '6',
                fontWeight: 'sx',
                transition: 'color 500ms',
                ':hover': {
                  color: 'schoolBus'
                }
              }
            }}
            >
              <li><Link to={'/'} nav={nav} onClick={() => showNav(!nav)}>Home</Link></li>
              <li><Link to={'/project'} nav={nav} onClick={() => showNav(!nav)}>Projects</Link></li>
              {/*<li><Link to={'/insight'} nav={nav} onClick={() => showNav(!nav)}>Insights</Link></li>*/}
              <Divider />
              <li><a href="https://www.github.com/ryandhjeon" target="_blank" rel="noreferrer" nav={nav} onClick={() => showNav(!nav)}>Github</a></li>
              <li><a href="https://www.linkedin.com/in/ryandhjeon" target="_blank" rel="noreferrer" nav={nav} onClick={() => showNav(!nav)}>LinkedIn</a></li>
              <li><a href="mailto:ryandhjeon@gmail.com" rel="noreferrer" nav={nav} onClick={() => showNav(!nav)}>Email</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </Headroom>
  );
}
