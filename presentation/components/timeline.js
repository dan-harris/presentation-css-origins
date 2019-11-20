/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { Image } from 'spectacle';
import { images } from '../images';
import { SlideStep } from './slide-step';

const TOTAL_STEPS = 5;

const TimelineWrapper = styled.div`
  margin-top: 550px;
  margin-left: -45px;
  width: 1000px;
`;

const LoadBarWrapper = styled.div`
  width: 1000px;
  height: 60px;
  position: relative;
`;

const LoadBar = styled.div`
  height: 100%;
  width: 100%;
  border: 0.4rem dashed black;
  position: absolute;
  top: 0;
`;

const LoadBarSelected = styled.div`
  background-color: #875cd666;
  height: 100%;
  width: 100%;
  transition: width 600ms ease-in-out;
  width: ${props => getLoadBarSelectedWidth(props.currentStep)};
  border-right: 0.4rem solid black;
`;

const getLoadBarSelectedWidth = (step = 0) => {
  switch (step) {
    case 0:
      return '5%';
    case 1:
      return '26.5%';
    case 2:
      return '50%';
    case 3:
      return '73.5%';
    case 4:
      return '95%';
    default:
      return '5%';
  }
};

const isDisplayStep = (currentStep, step = 0) => {
  return step <= currentStep;
};

const isStep = (currentStep, step = 0) => {
  return step === currentStep;
};

const TimeIndicator = styled.div`
  position: absolute;
  left: calc(${props => getLoadBarSelectedWidth(props.step)} - 6px);
  height: 50px;
  width: 0.4rem;
  bottom: 55px;
  background-color: black;
  opacity: ${props => (isDisplayStep(props.currentStep, props.step) ? '1' : '0')};
  transition: opacity 600ms ease-in-out;
  transition-delay: 600ms;
`;

const TimeIndicatorImage = styled(Image)`
  position: absolute;
  left: calc(${props => getLoadBarSelectedWidth(props.step)} - 90px);
  opacity: ${props => (isDisplayStep(props.currentStep, props.step) ? '1' : '0')};
  transition: opacity 600ms ease-in-out;
  transition-delay: 600ms;
  bottom: 120px;
  max-width: initial !important;
  max-height: initial !important;
`;

const TimeIndicatorHeadingWrapper = styled.div`
  position: absolute;
  left: calc(${props => getLoadBarSelectedWidth(props.step)} - 300px);
  opacity: ${props => (isStep(props.currentStep, props.step) ? '1' : '0')};
  transition: opacity 600ms ease-in-out;
  transition-delay: 600ms;
  bottom: 450px;
  width: 600px;
`;

const TimeIndicatorHeadingText = styled.h2`
  font-family: 'Fjalla One';
  font-size: 4rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

const TimeIndicatorSubheadingText = styled.span`
  font-family: 'Fira Code';
  font-size: 2.25rem;
  color: #875cd6;
  font-weight: 500;
`;

const TimeIndicatorHeading = ({ heading, subheading, currentStep, step }) => (
  <TimeIndicatorHeadingWrapper step={step} currentStep={currentStep}>
    <TimeIndicatorHeadingText>{heading}</TimeIndicatorHeadingText>
    <TimeIndicatorSubheadingText>&#123; {subheading} &#125;</TimeIndicatorSubheadingText>
  </TimeIndicatorHeadingWrapper>
);

export class TimelineFirstShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleStep = this.handleStep.bind(this);
    this.getStep = this.getStep.bind(this);
    this.state = {
      isNextSlide: false,
      step: props.minStep ? props.minStep : 0
    };
  }

  handleStep(forwards, index) {
    const { step } = this.state;
    // const correctedStepValue =
    const newIndex = !!forwards ? step + 1 : step - 1;
    this.setState({
      isNextSlide: !!forwards,
      step: newIndex
    });
  }

  getStep() {
    const { step } = this.state;
    const { minStep } = this.props;

    // dumb calc as this function runs twice for every step update
    const calcCurrentStep = Math.floor(step / 2);
    return calcCurrentStep + minStep;
  }

  render() {
    console.log({ step: this.getStep() });
    const currentStep = this.getStep();
    const { minStep, maxStep } = this.props;
    const totalSteps = maxStep - minStep;
    return (
      <TimelineWrapper>
        <SlideStep steps={totalSteps} onStep={this.handleStep} />
        <LoadBarWrapper>
          {/* simple documents */}
          <TimeIndicator step={0} currentStep={currentStep} />
          <TimeIndicatorImage step={0} currentStep={currentStep} src={images.robotSimple} height={175} width={175} />
          <TimeIndicatorHeading step={0} currentStep={currentStep} heading="simple documents" subheading="early 2000's" />
          {/* stylish documents */}
          <TimeIndicator step={1} currentStep={currentStep} />
          <TimeIndicatorImage step={1} currentStep={currentStep} src={images.robotStylish} height={175} width={175} />
          <TimeIndicatorHeading step={1} currentStep={currentStep} heading="stylish documents" subheading="late 1990’s → 2000’s" />
          {/* responsive documents */}
          <TimeIndicator step={2} currentStep={currentStep} />
          <TimeIndicatorImage step={2} currentStep={currentStep} src={images.robotResponsive} height={175} width={175} />
          <TimeIndicatorHeading step={2} currentStep={currentStep} heading="responsive documents" subheading="2000’s → early 2010’s" />
          {/* web apps */}
          <TimeIndicator step={3} currentStep={currentStep} />
          <TimeIndicatorImage step={3} currentStep={currentStep} src={images.robotWebApp} height={175} width={175} />
          <TimeIndicatorHeading step={3} currentStep={currentStep} heading="web applications" subheading="mid 2010’s → now" />
          {/* the future */}
          <TimeIndicator step={4} currentStep={currentStep} />
          <TimeIndicatorImage step={4} currentStep={currentStep} src={images.robotFuture} height={175} width={175} />
          <TimeIndicatorHeading step={4} currentStep={currentStep} heading="the future" subheading="the future" />

          <LoadBarSelected currentStep={currentStep} />
          <LoadBar />
        </LoadBarWrapper>
      </TimelineWrapper>
    );
  }
}
