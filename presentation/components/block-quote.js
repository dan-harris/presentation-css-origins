/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

const BlockQuoteWrapper = styled.blockquote`
  text-align: left;
  position: relative;
  display: inline-block;
  margin: 20px;
`;

const Quote = styled.span`
  border-left: 0.3rem solid #865cd6;
  font-size: 2.75rem;
  font-weight: normal;
  line-height: 1.25em;
  display: inline-block;
  padding-left: 2rem;
`;

const Cite = styled.cite`
  /* padding-left: 2rem;
  margin-top: 2rem;
  display: inline-block;
  font-size: 2.25rem;
  opacity: 0.7; */
  padding-left: 2.5rem;
  margin-top: 2rem;
  display: inline-block;
  font-size: 3.25rem;
  font-style: normal;
  font-family: 'pacifico';
  text-transform: lowercase;
`;

export const BlockQuote = props => (
  <BlockQuoteWrapper>
    <Quote>{props.children}</Quote>
    <Cite>{props.author}</Cite>
  </BlockQuoteWrapper>
);
