import React from 'react';
import {Text, View} from 'react-native';
import {Button, AppBar, IconButton} from '@react-native-material/core';
// import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';

const BuilderToolbar = () => {
  return (
    <AppBar
      title="TempleTask"
      leading={props => (
        <IconButton
          icon={props => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
    />
  );
};
export default BuilderToolbar;
