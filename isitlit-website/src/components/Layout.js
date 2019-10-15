import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';

import globalStyle from '../styles/global';

export const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap"
      />
    </Helmet>
    <Global styles={globalStyle} />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
