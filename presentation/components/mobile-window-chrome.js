/* eslint-disable react/prop-types */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { wait } from '../utils/wait';

const MobileWindowWrapper = styled.div`
  border: 0.4rem solid black;
  border-radius: 12px;
  width: 350px;
  height: 555px;
  background: url(./slide-images/gear-small-spin.svg) center center no-repeat;
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: white;
  transform: translate(5rem, 0rem);
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  flex-grow: 1;

  > img {
    margin: 0;
    width: 100%;
  }

  ${props =>
    props.hasChildAnimation &&
    css`
      > img {
        opacity: ${props => (props.showImage ? 1 : 0)};
        transition: opacity 300ms ease-in;
      }
    `}
`;

const MobileWindowTopBar = styled.div`
  height: 50px;
  border-bottom: 0.4rem solid black;
  flex-shrink: 0;
`;

const MobileWindowBottomBarWrapper = styled.div`
  height: 50px;
  border-top: 0.4rem solid black;
  justify-content: center;
  display: flex;
  flex-shrink: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
`;

const MobileWindowBottomBarButton = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background-color: #865bd6;
  margin-top: 8px;
`;

const MobileWindowBottomBar = props => (
  <MobileWindowBottomBarWrapper>
    <MobileWindowBottomBarButton />
  </MobileWindowBottomBarWrapper>
);

export class MobileWindowChrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    };
  }

  async componentDidMount() {
    if (!this.props.hasChildAnimation) {
      await wait(1200);
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ showImage: true });
    }
  }

  render() {
    const { children } = this.props;
    const { showImage } = this.state;
    return (
      <MobileWindowWrapper showImage={showImage}>
        <MobileWindowTopBar />
        <ImageWrapper>{children}</ImageWrapper>
        <MobileWindowBottomBar />
      </MobileWindowWrapper>
    );
  }
}
