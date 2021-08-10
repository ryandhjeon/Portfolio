/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Navbar } from './navbar';
import Footer from './footer';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import "../styles/index.css"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <div sx={{ variant: 'layout' }}>
      <Navbar siteTitle={title} />
      <main sx={{ variant: 'layout.main' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
