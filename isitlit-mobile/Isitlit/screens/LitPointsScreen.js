/**
 * This screen shows a list of points that the user has saved. It allows them
 * to place notes on these points.
 */

import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Button } from 'react-native';

import { getSavedPoints, setSavedPoints } from '../storage';

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
    </SafeAreaView>
  );
};

export default LitPointsScreen;
