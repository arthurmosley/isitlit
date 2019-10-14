import React from 'react';
import MapView from 'react-native-maps';

/**
 * This component encapsulates the `MapView` from react native maps. It adds
 * application specific functionality and allows you to specify a position
 * where the map should be located at.
 */
export default function LitMap({ position, ...props }) {
  return (
    <MapView
      style={{
        flexGrow: 1,
      }}
      region={position ? {
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      } : {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.9,
        longitudeDelta: 0.9,
      }}
      {...props}
    />
  );
}
