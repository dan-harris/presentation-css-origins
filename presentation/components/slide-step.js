import React from 'react';
import { Anim } from 'spectacle';

// eslint-disable-next-line react/prop-types
export const SlideStep = ({ order, onStep }) => (
  <Anim order={order ? order : 1} fromStyle={{ opacity: '0' }} toStyle={[{ opacity: '1' }]} onAnim={onStep}>
    <div></div>
  </Anim>
);
