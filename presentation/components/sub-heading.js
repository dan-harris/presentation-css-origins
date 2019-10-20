import styled from '@emotion/styled';
import React from 'react';
import { Image, Layout } from 'spectacle';
import { images } from '../images';
import { HeadingWithEmphasis } from './heading-with-emphasis';

/**
 * inline arrow images
 */
const ArrowImage = styled(Image)`
  margin: 1em 1em 0 !important;
`;

export const SubHeading = props => (
  <Layout style={{ justifyContent: 'center' }}>
    {!props.children ? (
      <ArrowImage src={images.arrowUnderline} />
    ) : (
      <>
        <ArrowImage src={images.arrowLeft} />
        <HeadingWithEmphasis size={2} {...props}>
          {props.children}
        </HeadingWithEmphasis>
        <ArrowImage src={images.arrowRight} />
      </>
    )}
  </Layout>
);
