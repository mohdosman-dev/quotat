import React from 'react';
import {View, Image, Text} from 'react-native';
import Styles from './styles';

const Section = props => {
  const {img, catalog} = props;
  return (
    <View style={Styles.container}>
      <Image source={img} style={Styles.sectionIcon}/>
      <Text style={Styles.sectionText}>{catalog}</Text>
    </View>
  );
};

export default Section;
