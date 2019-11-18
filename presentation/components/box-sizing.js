/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

const BoxWrapper = styled.div``;

const BoxInner = styled.div`
  height: 350px;
  width: 350px;
  border: dashed 0.5rem black;
  background-color: white;
`;

const Box = styled.div`
  height: 450px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #875cd666;
  border: solid 0.4rem #875cd6;
`;

const BoxOuter = styled.div`
  height: 550px;
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #875cd666;
  margin: auto;
`;

const MarginText = styled.span`
  display: block;
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  bottom: 50px;
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

export const BoxSizing = () => (
  <BoxWrapper>
    <BoxOuter>
      <Box>
        <BoxInner />
        <WidthText>Width</WidthText>
        <PaddingText>Padding</PaddingText>
      </Box>
      <MarginText>Margin</MarginText>
    </BoxOuter>
  </BoxWrapper>
);
