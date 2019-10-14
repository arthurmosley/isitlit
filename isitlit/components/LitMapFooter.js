import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import icon from '../assets/icon.png';

function LitButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: 100,
          height: 100,
        }}
      />
    </TouchableOpacity>
  );
}

export default function LitMapFooter({ onLitButtonPress }) {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 140,
        justifyContent: 'center',
      }}
    >
      <LitButton onPress={onLitButtonPress} />
    </View>
  );
}
