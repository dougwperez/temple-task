import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@react-native-material/core';

const BuilderToolbar = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, PERSON!</Text>
      <Button title="Click Me" onPress={() => alert('🎉🎉🎉')} />
    </View>
  );
};
export default BuilderToolbar;
