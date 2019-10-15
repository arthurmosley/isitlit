import React from 'react';
import styled from '@emotion/styled';

import { units } from '../styles/theme';


export const Testimonial = styled.div`
  font-size: 1.25rem;
  background: #ffffff20;
  border-radius: 1rem;
  margin-top: ${units.spacer};
  padding: ${units.spacer};
`;

Testimonial.Quote = styled.blockquote`
  font-style: italic;
  margin: 0;

  &::before {
    content: '“';
  }
  &::after {
    content: '”';
  }
`;

Testimonial.Author = styled.cite`
  display: block;
  font-weight: 700;
  font-style: normal;
  text-align: right;

  &::before {
    content: '– ';
  }
`;
