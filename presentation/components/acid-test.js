import styled from '@emotion/styled';
import React from 'react';

const BoxAcidTestWrapper = styled.div`
  border: 0.4rem solid black;
  padding: 0;
  width: 48em;
  transform: scale(1.3);
  text-align: left;
  margin: auto;

  dl {
    margin: 0;
    border: 0;
    padding: 0.5em;
    width: 100%;
    display: inline-block;
  }

  dt {
    background-color: #865cd6;
    margin: 0;
    padding: 1em;
    width: 24%;
    height: 27em;
    border: 0.4rem solid black;
    float: left;
  }

  dd {
    float: right;
    margin: 0 0 0 1em;
    border: 0.4rem solid black;
    padding: 1em;
    width: 34em;
    height: 27em;
  }

  dd p {
    margin: 0;
  }

  ul {
    margin: 0;
    border: 0;
    padding: 0;
  }

  li {
    display: block; /* i.e., suppress marker */
    color: black;
    height: 9em;
    width: 125px;
    margin: 0;
    border: 0.4rem solid black;
    padding: 1em;
    float: left;
    background-color: #865cd6;
  }

  #bar {
    width: 41.17%;
    margin: 0 1em;
    background-color: transparent;
  }

  #baz {
    margin: 1em 0;
    padding: 1em;
    width: 175px;
    height: 10em;
    background-color: transparent;
  }

  form {
    margin: 0;
    display: inline;
  }

  p {
    margin: 1rem;
  }

  form p {
    line-height: 1.9;
  }

  form input {
    margin-left: 0.75em;
  }

  blockquote {
    margin: 1em 1em 1em 2em;
    border-width: 0.4rem;
    border-style: solid;
    padding: 1em 0;
    width: 5.6em;
    height: 9em;
    float: left;
    background-color: #865cd6;
  }

  address {
    font-style: normal;
  }

  h1 {
    border: 0.4rem solid black;
    padding: 1em;
    float: left;
    float: left;
    margin: 1em 0;
    width: 175px;
    height: 10em;
    font-weight: normal;
    font-size: 1em;
  }
`;

export const BoxAcidTest = props => (
  <BoxAcidTestWrapper>
    <dl>
      <dt>toggle</dt>
      <dd>
        <ul>
          <li>the way</li>
          <li id="bar">
            <p>the world ends</p>
            <form action="./" method="get">
              <p>
                bang
                <input type="radio" name="foo" value="off" />
              </p>
              <p>
                whimper
                <input type="radio" name="foo2" value="on" />
              </p>
            </form>
          </li>
          <li>i grow old</li>
          <li id="baz">pluot?</li>
        </ul>
        <blockquote>
          <address>bar maids,</address>
        </blockquote>
        <h1>sing to me, erbarme dich</h1>
      </dd>
    </dl>
    {/* <p style="color: black; font-size: 1em; line-height: 1.3em; clear: both"> */}
    <p>
      This is a nonsensical document, but syntactically valid HTML 4.0. All 100%-conformant CSS1 agents should be able to render the
      document elements above this paragraph indistinguishably (to the pixel) from this
      <a href="sec5526c.gif">reference rendering,</a>
      (except font rasterization and form widgets). All discrepancies should be traceable to CSS1 implementation shortcomings. Once you have
      finished evaluating this test, you can return to the <a href="sec5526c.htm">parent page</a>.
    </p>
  </BoxAcidTestWrapper>
);
