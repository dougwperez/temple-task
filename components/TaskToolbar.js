import React from 'react';
import {Text, View} from 'react-native';
import {Button, AppBar} from '@react-native-material/core';

const TaskToolbar = () => {
  return (
    <AppBar
      variant="bottom"
      style={{position: 'absolute', start: 0, end: 0, bottom: 0, height: 60}}
    />
  );
};
export default TaskToolbar;
