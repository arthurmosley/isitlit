/**
 * This component extends the MapView provided by 'react-native-maps' with our
 * own custom functionality.
 */

import React from 'react';
import MapView, { PROVIDER_GOOGLE, Heatmap, Marker } from 'react-native-maps';

import customMapStyle from './custom-map-style.json';

const LitMapView = ({
  initialRegion,
  points,
  savedPoints,
  onPress,
}) => (
  <MapView
    provider={PROVIDER_GOOGLE}
    initialRegion={initialRegion}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
    customMapStyle={customMapStyle}
    showsUserLocation
    onPress={onPress}
  >
    {points.length > 0 &&
      <Heatmap points={points} />
    }
    {savedPoints.map(({ latitude, longitude }, i) => (
      <Marker
        key={i}
        coordinate={{ latitude, longitude }}
      />
    ))}
  </MapView>
);

export default LitMapView;
