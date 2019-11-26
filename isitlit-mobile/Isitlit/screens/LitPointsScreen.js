/**
 * This screen shows a list of points that the user has saved. It allows them
 * to place notes on these points.
 */

import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Button } from 'react-native';

import { getSavedPoints, setSavedPoints } from '../storage';

/**
 * Shows the list item for a single favorited point. This includes the
 * latitude/longitude location, the time of creation, and a delete button to
 * remove the item from the list.
 */
const LitPoint = ({ latitude, longitude, time, onDelete }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 20,
      }}
    >
      <View style={{ flexGrow: 2 }}>
        <Text style={{ fontSize: 16 }}>
          ({latitude.toString().slice(0, 8)}˚
          , {longitude.toString().slice(0, 8)}˚)
        </Text>
        <Text style={{ color: 'gray', marginTop: 8 }}>
          {time}
        </Text>
      </View>
      <Button
        style={{ textAlign: 'left' }}
        title="Delete"
        onPress={onDelete}
      />
    </View>
  );
}

/**
 * Shows a list of all of the saved points. When a user delets a point, syncs
 * this information with locale storage.
 */
const LitPointsScreen = () => {
  const [points, setPoints] = useState([]);
  useEffect(() => {
    getSavedPoints().then((points) => { setPoints(points) });
  });
  const deletePoint = (i) => {
    const newPoints = [
      ...points.slice(0, i),
      ...points.slice(i + 1),
    ];
    setPoints(newPoints);
    setSavedPoints(newPoints);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {points.length > 0 ? (
        <FlatList
          data={points}
          renderItem={({ item: { latitude, longitude, time }, index }) => (
            <LitPoint
              latitude={latitude}
              longitude={longitude}
              time={time}
              onDelete={() => deletePoint(index)}
            />
          )}
          keyExtractor={(_, i) => i.toString()}
        />
      ) : (
        <Text style={{ margin: 20, fontSize: 20 }}>
          You don't have any saved points yet! Click anywhere on the map to save a point.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default LitPointsScreen;
