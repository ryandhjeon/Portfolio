/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Navbar } from './navbar';
import Footer from './footer';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <div sx={{ variant: 'layout' }}>
      <Helmet>
        <link href={withPrefix('https://use.typekit.net/cfv1yds.css')} rel="stylesheet" type="text/css" />
      </Helmet>
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
