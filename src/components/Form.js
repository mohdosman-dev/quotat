import React from 'react';
import {View, Text} from 'react-native';

import {CardSection, Seprator} from './common';

import Styles from './styles';

const Form = props => {
  return (
    <View style={Styles.formContainer}>
      <CardSection>
        <Text style={Styles.formTitleStyle}>{props.title}</Text>
      </CardSection>
      <Seprator />
      <CardSection>{props.children}</CardSection>
    </View>
  );
};

export default Form;
