/**
 * This screens shows the map view for the application. This includes the custom
 * Google map interface as well as the custom user interface components that
 * are overlayed.
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import { getCurrentPosition } from '../geo';
import { getAllPoints, createPoint } from '../api';
import { setSavedPoints, getSavedPoints, hasLaunched } from '../storage';
import LitMapView from '../components/LitMapView';
import LitMapButton from '../components/LitMapButton';
import LitMapInstructionModal from '../components/LitMapInstructionModal';

// Number of milliseconds between each refresh of the map.
const LIT_MAP_REFRESH = 5000;

export default class LitMapScreen extends Component {
  constructor(props) {
    super(props);

    this.refreshInterval = null;
    this.state = {
      instructionsVisible: false,
      initialRegion: undefined,
      points: [],
      savedPoints: [],
    };
  }

  async componentDidMount() {
    // Schedule the map to be refreshed every LIT_MAP_REFRESH milliseconds.
    this.refreshInterval = setInterval(() => {
      this.refreshPoints();
    }, LIT_MAP_REFRESH);
    this.refreshPoints();

    // Set initial region of the map to the user's current location as soon
    // as it is available.
    alert("About to get position");
    const { latitude, longitude } = await getCurrentPosition();
    alert("latitude: " + latitude + "longitude: " + longitude);
    this.setState({
      initialRegion: {
        latitude,
        longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      },
    });

    // Get the list of saved points.
    const savedPoints = await getSavedPoints();
    this.setState({ savedPoints });

    // Determine whether instructions should be shown.
    if (!(await hasLaunched())) {
      this.setState({ instructionsVisible: true });
    }
  }

  componentWillUnmount() {
    // Cleanup event listeners to prevent memory leaks.
    clearInterval(this.refreshInterval);
  }

  refreshPoints() {
    // Load all points from the API and update them on the map.
    getAllPoints().then((points) => {
      this.setState({ points });
    });

    getSavedPoints().then((savedPoints) => {
      this.setState({ savedPoints });
    });
  }

  createPoint() {
    // Creates a point at the current position and reloads the map once the
    // server has responded with an updated list of points.
    getCurrentPosition().then(({ latitude, longitude }) => {
      alert("About to create point with latitude: " + latitude + " and longitude: " + longitude);
      return createPoint({
        latitude: latitude - 1 + 2 * Math.random(),
        longitude: longitude - 1 + 2 * Math.random(),
      })
    }).then((points) => {
      this.setState({ points });
    });
  }

  /**
   * Adds a point to the list of saved points and saves it to local storage.
   */
  addSavedPoint({ latitude, longitude }) {
    const newSavedPoints = [
      ...this.state.savedPoints,
      {
        latitude,
        longitude,
        time: new Date().toLocaleString(),
      },
    ];
    this.setState({ savedPoints: newSavedPoints });
    setSavedPoints(newSavedPoints);
  }

  /**
   * Closes the instructions screen.
   */
  closeInstructions() {
    this.setState({ instructionsVisible: false });
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
        <LitMapInstructionModal
          visible={this.state.instructionsVisible}
          onClose={() => this.closeInstructions()}
        />
        <LitMapView
          initialRegion={this.state.initialRegion}
          points={this.state.points}
          onPress={event => this.addSavedPoint(event.nativeEvent.coordinate)}
          savedPoints={this.state.savedPoints}
        />
        <LitMapButton
          onPress={() => this.createPoint()}
          style={{ marginBottom: 50 }}
        />
      </View>
    );
  }
}
