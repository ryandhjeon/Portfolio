/** @jsx jsx */
import React from 'react';
import { jsx, MenuButton } from 'theme-ui';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';

const Nav = ({ siteTitle }) => (
  <Headroom>
    <header
      sx={{
        variant: 'layout.nav',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1040px',
          mx: 'auto',
        }}
      >
        <Link
          to="/"
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            '&:hover': {
              color: 'white !important',
            },
          }}
        >
          {siteTitle}
        </Link>
        <NavMenu />
        <MenuButton
          sx={{
            display: 'none',
            '@media screen and (max-width: 40em)': {
              display: 'flex',
              color: 'white',
            },
          }}
        />
      </div>
    </header>
  </Headroom>
);

const NavMenu = () => {
  return (
    <ul
      sx={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
        letterSpacing: 2,
        ml: 'none',
        mb: '0 !important',
        '@media screen and (max-width: 40em)': {
          display: 'none',
        },
      }}
    >
      <li
        sx={{
          mb: '0 !important',
        }}
      >
        <Link to={'/insight'}>Insight</Link>
      </li>
      <li
        sx={{
          mb: '0 !important',
          ml: 3,
        }}
      >
        <Link to={'/project'}>Project</Link>
      </li>
      <li
        sx={{
          mb: '0 !important',
          ml: 3,
        }}
      >
        <Link to={'/publication'}>Publication</Link>
      </li>
      <li
        sx={{
          mb: '0 !important',
          ml: 3,
        }}
      >
        <Link to={'/about'}>About</Link>
      </li>
    </ul>
  );
};

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};

export default Nav;
