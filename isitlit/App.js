import React from 'react';
import Map from './screens/Map';

export default function App() {
  return <Map />;
  /*
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>
      <View style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 140,
        borderTopColor: '#000',
        borderTopWidth: 2,
      }}>
        <Image source={icon} style={{ width: 100, height: 100, margin: 20 }} />
      </View>
   </View>
  );*/
}
