import { css } from '@emotion/core';

import { colors } from './theme';

export default css`
  html {
    background: ${colors.blue};
    box-sizing: border-box;
    color: #fff;
    font-family: 'Nunito', 'Helvetica', 'Arial', sans-serif;
    font-size: 100%;
    font-weight: 400;
    line-height: 1.5;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }
`;
