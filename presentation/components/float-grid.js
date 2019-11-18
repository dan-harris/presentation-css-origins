/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { CodePane } from 'spectacle';
import { SlideStep } from './slide-step';

const FloatGridWrapper = styled.div``;

const Row = styled.div`
  background-color: #875cd666;
  height: ${props => (props.isClearfix ? '350px' : '50px')};
  padding: 4.5rem 1rem;
  transition: height 600ms ease-in-out;
`;

const RowItem = styled.div`
  display: block;
  width: calc(${props => props.width}% - 2rem);
  float: left;
  border: dashed 0.5rem black;
  background-color: white;
  margin: 1rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
`;

const RowText = styled.span`
  position: absolute;
  left: 4.5rem;
  font-size: 2rem;
  font-weight: bold;
  top: 4.5rem;
`;

const RowFadeinText = styled.span`
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity 400ms ease-in-out;
`;

export class FloatGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClearfix: false
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
      <FloatGridWrapper>
        <SlideStep onStep={this.handleStep} />
        <Row isClearfix={isClearfix}>
          <RowText>
            .row<RowFadeinText show={isClearfix}>.clearfix</RowFadeinText>
          </RowText>
          <RowItem width={50}>.item</RowItem>
          <RowItem width={25}>.item</RowItem>
          <RowItem width={25}>.item</RowItem>
        </Row>
        <CodePane
          className="codeslide language-js"
          lang="css"
          source={`
            .item {
                display: block;
                width: 25%;
                float: left;
            }
        `}
        ></CodePane>
      </FloatGridWrapper>
    );
  }
}
