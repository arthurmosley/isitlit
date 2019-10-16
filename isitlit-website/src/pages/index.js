/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { units } from '../styles/theme';
import { Layout } from '../components/Layout';
import { SingleColumn } from '../components/SingleColumn';
import { Testimonial } from '../components/Testimonial';
import appIcon from '../images/app-icon.svg';

const AppIcon = () => (
  <img
    alt="isitlit? app icon"
    src={appIcon}
    css={css`
      display: block;
      height: 25%;
      margin: ${units.spacer} auto;
      width: 25%;
    `}
  />
);

const Title = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  line-height: 1;
  margin: 0;
  text-align: center;
`;

const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <AppIcon />
    <Title>isitlit?</Title>
    <Slogan>find your place</Slogan>
    <SingleColumn>
      <Testimonial>
        <Testimonial.Quote>
          isitlit? makes finding new hangout spots a breeze!
        </Testimonial.Quote>
        <Testimonial.Author>Vanessa</Testimonial.Author>
      </Testimonial>
      <Testimonial>
        <Testimonial.Quote>
          When I forgot about my anniversary, I needed to think quick so my wife
          didn't know I hadn't planned anything. Isitlit? got me to a cool spot
          in no time, saving my night and my marriage from certain ruin!
        </Testimonial.Quote>
        <Testimonial.Author>Bill</Testimonial.Author>
      </Testimonial>
      <Testimonial>
        <Testimonial.Quote>
          Why would I ever use this?
        </Testimonial.Quote>
        <Testimonial.Author>a very anti-fun person</Testimonial.Author>
      </Testimonial>
    </SingleColumn>
  </Layout>
);

export default IndexPage;
