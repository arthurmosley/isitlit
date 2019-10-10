import React from 'react';
import { View, Image } from 'react-native';
import fire from './assets/fire.png';
import MapView from 'react-native-maps';

export default function App() {
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
      />
      <View style={{ backgroundColor: '#f80', alignItems: 'center', height: 140 }}>
        <Image source={fire} style={{ width: 100, height: 100, margin: 20 }} />
      </View>
   </View>
  );
}
