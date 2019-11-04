import React, { Component } from 'react';
import { View } from 'react-native';

import LitMapView from '../components/LitMapView';
import LitMapButton from '../components/LitMapButton';

export default class LitMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      points: []
    };
  }

  componentDidMount() {
    this.fetchLitMap();

    setInterval(() => {
      this.fetchLitMap();
    }, 1000);
  }

  fetchLitMap() {
    fetch('http://localhost:3000/map')
      .then(response => response.json())
      .then(points => { this.refreshLitMap(points) });
  }

  postPoint(point) {
    const request = fetch('http://localhost:3000/itslit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(point)
    });
    request
      .then(response => response.json())
      .then(points => { this.refreshLitMap(points) });
  }

  refreshLitMap(points) {
    this.setState({ points });
  }

  handleLitMapButtonClick = () => {
    /*
    this.setState(state => ({
      points: [
        ...state.points,
        {
          latitude: state.latitude,
          longitude: state.longitude,
          weight: 1,
        },
      ],
    }));*/
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <LitMapView
          points={this.state.points}
        />
        <LitMapButton
          onPress={this.handleLitMapButtonClick}
          style={{ marginBottom: 50 }}
        />
      </View>
    );
  }
}

/**
 *         region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
 */
