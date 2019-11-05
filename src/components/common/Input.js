import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import Styles from './styles';

import Colors from './Colors';

const Input = ({
  lable,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  onFocus,
  onBlur,
}) => {
  const {inputContainer, inputStyle, labelStyle} = Styles;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = event => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = event => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <View style={inputContainer}>
      <Text style={labelStyle}>{lable}</Text>
      <TextInput
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid={isFocused ? Colors.primaryColor : Colors.grey_5}
        selectionColor={Colors.primaryColor}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export {Input};
