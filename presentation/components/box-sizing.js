/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { CodePane } from 'spectacle';
import { SlideStep } from './slide-step';

const BoxWrapper = styled.div`
  margin-top: -70px;
`;

const BoxInner = styled.div`
  height: ${props => (props.isClearfix ? '100px' : '200px')};
  width: ${props => (props.isClearfix ? '100px' : '200px')};
  background-color: white;
  transition: height 600ms ease-in-out, width 600ms ease-in-out;
`;

const Box = styled.div`
  height: ${props => (props.isClearfix ? '200px' : '350px')};
  width: ${props => (props.isClearfix ? '200px' : '350px')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #875cd666;
  transition: height 600ms ease-in-out, width 600ms ease-in-out;
`;

const BoxOuter = styled.div`
  height: ${props => (props.isClearfix ? '300px' : '500px')};
  width: ${props => (props.isClearfix ? '300px' : '500px')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #875cd666;
  margin: auto;
  position: relative;
  transition: height 600ms ease-in-out, width 600ms ease-in-out;
`;

const BoxOuterWrapper = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
`;

const BoxContentOverlay = styled.div`
  border: dashed 0.5rem black;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 120px;
  left: 400px;
  z-index: +1;
`;

const MarginText = styled.span`
  display: block;
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  bottom: 25px;
`;

const PaddingText = styled.span`
  display: block;
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  bottom: 100px;
`;

const WidthText = styled.span`
  display: block;
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
`;

const CodePaneWrapper = styled.div`
  margin-top: 150px;
`;

export class BoxSizing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuirksMode: true
    };
    this.handleStep = this.handleStep.bind(this);
  }

  handleStep(forwards) {
    this.setState({
      isClearfix: !!forwards
    });
  }

  render() {
    const { isClearfix } = this.state;
    return (
      <BoxWrapper>
        <SlideStep onStep={this.handleStep} />
        <BoxContentOverlay />
        <BoxOuterWrapper>
          <BoxOuter isClearfix={isClearfix}>
            <Box isClearfix={isClearfix}>
              <BoxInner isClearfix={isClearfix} />
              {!isClearfix && (
                <>
                  <WidthText>.content</WidthText>
                  <PaddingText>.padding</PaddingText>
                  <MarginText>.margin</MarginText>
                </>
              )}
            </Box>
          </BoxOuter>
        </BoxOuterWrapper>
        <CodePaneWrapper>
          <CodePane
            className="codeslide language-js"
            lang="css"
            source={`
            .content {
                width: 200px;
            }
            `}
          />
        </CodePaneWrapper>
      </BoxWrapper>
    );
  }
}
