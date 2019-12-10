/**
 * This component is the custom "fire" button that shows up on top of the
 * LitMap.
 */

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import litMapButtonSource from '../assets/lit-map-button.png';

const LitMapButton = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={litMapButtonSource}
      style={[
        {
          width: 120,
          height: 120,
        },
        style,
      ]}
    />
  </TouchableOpacity>
);

export default LitMapButton;
