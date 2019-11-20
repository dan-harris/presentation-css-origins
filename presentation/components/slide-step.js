import React from 'react';
import { Anim } from 'spectacle';

// eslint-disable-next-line react/prop-types
export const SlideStep = ({ steps = 1, onStep }) => (
  <>
    {[...Array(steps).keys()].map(stepNum => (
      <Anim
        key={stepNum}
        order={stepNum}
        fromStyle={{ opacity: '0' }}
        toStyle={[{ opacity: '1' }]}
        onAnim={onStep}
        transitionDuration={300}
        easing={'bounce'}
      >
        <div></div>
      </Anim>
    ))}
  </>
);
