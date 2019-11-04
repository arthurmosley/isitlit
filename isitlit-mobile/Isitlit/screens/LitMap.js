import React, { Component } from 'react';
import { View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { getAllPoints, createPoint } from '../api';
import LitMapView from '../components/LitMapView';
import LitMapButton from '../components/LitMapButton';

// Number of milliseconds between each refresh of the map.
const LIT_MAP_REFRESH = 10000;

export default class LitMap extends Component {
  constructor(props) {
    super(props);

    this.refreshInterval = null;
    this.state = { points: [] };
  }

  componentDidMount() {
    this.refreshInterval = setInterval(() => {
      this.refreshPoints();
    }, LIT_MAP_REFRESH);
  }

  componentWillUnmount() {
    // Cleanup event listeners to prevent memory leaks.
    clearInterval(this.refreshInterval);
  }

  refreshPoints() {
    getAllPoints().then((points) => {
      this.setState({ points });
    });
  }

  createPoint() {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        createPoint({
          latitude: latitude + 2 * Math.random(),
          longitude: longitude + 2 * Math.random(),
        }).then((points) => {
          this.setState({ points });
        });
      },
      () => {},
      { enableHighAccuracy: true },
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <LitMapView points={this.state.points} />
        <LitMapButton
          onPress={() => this.createPoint()}
          style={{ marginBottom: 50 }}
        />
      </View>
    );
  }
}
