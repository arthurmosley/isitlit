import React, { Component } from 'react';
import { View } from 'react-native';
import LitMap from '../components/LitMap';
import LitMapFooter from '../components/LitMapFooter';

function getPosition(callback) {
  navigator.geolocation.getCurrentPosition(
    position => callback(position.coords),
    () => {},
    { enableHighAccuracy: true },
  );
}

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = { position: null };
  }

  updatePosition = position => {
    this.setState({ position });
  }

  itsLit = position => {
    this.updatePosition(position);
  };

  onLitButtonPress = () => {
    getPosition(this.itsLit);
  }

  componentDidMount() {
    getPosition(this.updatePosition);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LitMap position={this.state.position} />
        <LitMapFooter onLitButtonPress={this.onLitButtonPress} />
      </View>
    );
  }
}
