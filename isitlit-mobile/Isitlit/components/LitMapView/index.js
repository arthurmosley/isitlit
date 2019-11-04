import React from 'react';
import MapView, { PROVIDER_GOOGLE, Heatmap } from 'react-native-maps';

import customMapStyle from './custom-map-style.json';

const LitMapView = ({
  initialRegion,
  points,
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
  >
    {points.length > 0 &&
      <Heatmap points={points} />
    }
  </MapView>
);

export default LitMapView;
