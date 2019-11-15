/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { wait } from '../utils/wait';

const BrowserWindowWrapper = styled.div`
  border: 0.4rem solid black;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transform: translateY(-40px);
  width: 920px;
  height: 675px;
  background: url(./slide-images/gear-small-spin.svg) center center no-repeat;
  overflow: hidden;

  > img {
    margin: 0;
    opacity: ${props => (props.showImage ? 1 : 0)};
    width: 100%;
    transition: opacity 300ms ease-in;
  }
`;

const BrowserWindowTopBarWindowButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  height: 45px;
  padding-left: 1.75rem;
`;

const BrowserWindowTopBarWindowButton = styled.div`
  /* border: 0.3rem solid black; */
  background-color: #865cd6;
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  margin-right: 0.75rem;
`;

const BrowserWindowTopBarWrapper = styled.div`
  height: 50px;
  border-bottom: 0.4rem solid black;
`;

const BrowserWindowTopBar = props => (
  <BrowserWindowTopBarWrapper>
    <BrowserWindowTopBarWindowButtonsWrapper>
      <BrowserWindowTopBarWindowButton />
      <BrowserWindowTopBarWindowButton />
      <BrowserWindowTopBarWindowButton />
    </BrowserWindowTopBarWindowButtonsWrapper>
  </BrowserWindowTopBarWrapper>
);

export class BrowserWindowChrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    };
  }

  async componentDidMount() {
    await wait(600);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ showImage: true });
  }

  render() {
    const { children } = this.props;
    const { showImage } = this.state;
    return (
      <BrowserWindowWrapper showImage={showImage}>
        <BrowserWindowTopBar />
        {children}
      </BrowserWindowWrapper>
    );
  }
}
