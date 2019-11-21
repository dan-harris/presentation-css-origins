/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { CodePane } from 'spectacle';

const CSSGridWrapper = styled.div``;

const Row = styled.div`
  background-color: #875cd666;
  height: 350px;
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

export class CSSGrid extends React.Component {
  render() {
    return (
      <CSSGridWrapper>
        <Row>
          <RowText>.grid-container</RowText>
          <RowItem width={50}>.item</RowItem>
          <RowItem width={25}>.item</RowItem>
          <RowItem width={25}>.item</RowItem>
        </Row>
        <CodePane
          className="codeslide language-js"
          lang="css"
          source={`
          .grid-container {
            display: grid;
            grid-template-columns: 
                        2fr 1fr 1fr;
          }
        `}
        ></CodePane>
      </CSSGridWrapper>
    );
  }
}
