import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Ripple from 'react-native-material-ripple';

import Styles from './styles';

import Colors from './Colors';

const LinkButton = ({onPress, message, buttonText}) => {
  return (
    <View style={Styles.linkButtonContainer}>
      <Text style={Styles.linkButtonMessage}> {message} </Text>
      <Ripple
        rippleColor={Colors.primaryLightColor}
        rippleDuration={600}
        onPress={onPress}
        style={Styles.linkButtonStyle}>
        <Text style={Styles.linkButtonTextStyle}>{buttonText}</Text>
      </Ripple>
    </View>
  );
};

export {LinkButton};
