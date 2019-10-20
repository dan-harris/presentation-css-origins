import styled from '@emotion/styled';
import React from 'react';
import { Appear, Image } from 'spectacle';
import { fadeInCustom } from '../components/default-attrs/appear-defaults';
import { HeadingWithEmphasis } from '../components/heading-with-emphasis';
import { LayoutExpanded } from '../components/layout-expanded';
import { images } from '../images';

/**
 * image defaults
 */
const fileImageDefaults = {
  height: 150,
  width: 150
};

/**
 * file images
 */
const FileImage = styled(Image)`
  &:not(:last-of-type) {
    margin: 0 0 4rem;
  }
`;

/**
 * floating header to right
 */
const FloatingHeader = styled.div`
  position: absolute;
  right: 0;

  & > * {
    background-color: white;
    padding: 0.1rem 1rem 3rem 0.1rem;
    position: absolute;
    right: 0;
    min-width: 500px;
    text-align: right;
  }
`;

/**
 * feel the flow 🌊
 */
export const BrowserFlow = () => (
  <>
    <LayoutExpanded>
      {/* special 'files' animation to represent DOM / CSSOM / JSSOM */}
      <div>
        <Appear order={1} startValue={{ transform: 'translateY(142%)' }} endValue={{ transform: 'translateY(0%)' }}>
          <FileImage src={images.fileJS} {...fileImageDefaults} />
        </Appear>
        <FileImage src={images.fileCSS} {...fileImageDefaults} />
        <Appear order={1} startValue={{ transform: 'translateY(-142%)' }} endValue={{ transform: 'translateY(0%)' }}>
          <FileImage src={images.fileHTML} {...fileImageDefaults} />
        </Appear>
      </div>
      {/* render tree */}
      <Appear order={2} {...fadeInCustom(0.3)}>
        <Image src={images.arrowSimpleRight} />
      </Appear>
      <Appear order={2} {...fadeInCustom(0.3)}>
        <Image src={images.share} />
      </Appear>
      {/* layout */}
      <Appear order={3} {...fadeInCustom(0.3)}>
        <Image src={images.arrowSimpleRight} />
      </Appear>
      <Appear order={3} {...fadeInCustom(0.3)}>
        <Image src={images.triangle} />
      </Appear>
      {/* paint */}
      <Appear order={4} {...fadeInCustom(0.3)}>
        <Image src={images.arrowSimpleRight} />
      </Appear>
      <Appear order={4} {...fadeInCustom(0.3)}>
        <Image src={images.brush} />
      </Appear>
      {/* header text */}
      <FloatingHeader>
        <HeadingWithEmphasis size={3}>object model</HeadingWithEmphasis>
        <Appear order={2}>
          <HeadingWithEmphasis size={3}>render tree</HeadingWithEmphasis>
        </Appear>
        <Appear order={3}>
          <HeadingWithEmphasis size={3}>layout</HeadingWithEmphasis>
        </Appear>
        <Appear order={4}>
          <HeadingWithEmphasis size={3}>paint</HeadingWithEmphasis>
        </Appear>
      </FloatingHeader>
    </LayoutExpanded>
  </>
);
