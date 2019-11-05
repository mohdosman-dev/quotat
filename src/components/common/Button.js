import React from 'react';
import {Text} from 'react-native';

import Ripple from 'react-native-material-ripple';

import Styles from './styles';

const Button = ({onPress, text}) => {
  return (
    <Ripple
      rippleColor="#fff"
      rippleDuration={600}
      onPress={onPress}
      style={Styles.buttonStyle}>
      <Text style={Styles.buttonText}>{text}</Text>
    </Ripple>
  );
};

export {Button};
