import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Styles from './styles';

const Section = props => {
  const {img, catalog} = props;
  return (
    <TouchableOpacity style={Styles.container}>
      <Image source={img} style={Styles.sectionIcon}/>
      <Text style={Styles.sectionText}>{catalog}</Text>
    </TouchableOpacity>
  );
};

export default Section;
