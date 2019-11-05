import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple';

import Styles from './styles';

const Section = props => {
  const {img, catalog, onPress} = props;
  return (
    <Ripple style={Styles.container} onPress={onPress}>
      <Image source={img} style={Styles.sectionIcon} />
      <Text style={Styles.sectionText}>{catalog}</Text>
    </Ripple>
  );
};

export default Section;
