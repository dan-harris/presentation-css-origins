import styled from '@emotion/styled';
import React from 'react';
import { Appear, Image } from 'spectacle';
import { fadeInCustom } from '../components/default-attrs/appear-defaults';
import { HeadingWithEmphasis } from '../components/heading-with-emphasis';
import { LayoutExpanded } from '../components/layout-expanded';
import { images } from '../images';

/**
 * spinning gear
 */
const SpinningGearImage = styled(Image)`
  position: absolute;
  right: 2rem;
  bottom: -3rem;
  transform: translateX(35%) rotate(0deg);
  animation: ${props => (props.spin ? '2s gearspin infinite linear' : 'none')};
`;

/**
 * animation frame images container
 */
const AnimationFrameImage = styled.div`
  @keyframes gearspin {
    from {
      transform: translateX(35%) rotate(0deg);
    }
    to {
      transform: translateX(35%) rotate(360deg);
    }
  }

  padding: 0 2rem 0 0;
  position: relative;
  margin: 8rem 0 10rem;
`;

/**
 * animation frame images container
 */
const AnimationFrameImageOverlayed = styled.div`
  position: absolute;
  top: 0.5rem;
  background-color: white;
  width: 220px;
  padding: 0 8px 0 0;
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
 * feel the (frame) flow 🌊
 */
export const BrowserFrameFlow = () => (
  <>
    <LayoutExpanded>
      {/* animation frame */}
      <AnimationFrameImage>
        <Image src={images.pictureFrame} height={180} width={180} />
        <SpinningGearImage src={images.gear} spin />
      </AnimationFrameImage>
      <Appear order={1}>
        <AnimationFrameImageOverlayed>
          <AnimationFrameImage>
            <Image src={images.pictureFrame} />
            <SpinningGearImage src={images.gear} style={{ bottom: '-3.5rem' }} />
          </AnimationFrameImage>
        </AnimationFrameImageOverlayed>
      </Appear>
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
        <HeadingWithEmphasis size={3}>animation frame</HeadingWithEmphasis>
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
