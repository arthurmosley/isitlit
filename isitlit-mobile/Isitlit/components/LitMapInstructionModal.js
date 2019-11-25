import React from 'react';
import { Button, Modal, Text, View, SafeAreaView, Image } from 'react-native';

import litMapButtonSource from '../assets/lit-map-button.png';

const paragraph = {
  fontSize: 20,
  marginBottom: 20,
};

const LitMapInstructionModal = ({ visible, onClose }) => (
  <Modal
    animationType="slide"
    visible={visible}
  >
    <SafeAreaView>
      <View style={{ margin: 16 }}>
        <Image
          source={litMapButtonSource}
          style={{
              alignSelf: 'center',
              marginBottom: 20,
              width: 120,
              height: 120,
          }}
        />
        <Text style={paragraph}>Welcome to Isitlit!</Text>
        <Text style={paragraph}>
          <Text style={{ fontWeight: 'bold' }}>Step 1:</Text> Explore the heat
          map to see where it's happening.
        </Text>
        <Text style={paragraph}>
          <Text style={{ fontWeight: 'bold' }}>Step 2:</Text> Add your own mark
          on the heat map by pressing the fire button. The
          more people in your area that press the fire button, the more heat
          will accumulate at your location.
        </Text>
        <Text style={paragraph}>
          <Text style={{ fontWeight: 'bold' }}>Step 3:</Text> Save
          locations you find interesting by tapping on the map.
        </Text>
        <Text style={[paragraph, { color: 'gray' }]}>
          Note: To get the most out of this app, you will have to allow location
          sharing while using it.
        </Text>
      </View>
      <Button
        title="Got it!"
        onPress={onClose}
      />
    </SafeAreaView>
  </Modal>
);

export default LitMapInstructionModal;
