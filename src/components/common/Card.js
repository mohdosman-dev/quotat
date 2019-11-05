import React from 'react';

import Ripple from 'react-native-material-ripple';

import Styles from './styles';

const Card = props => {
  return (
    <Ripple style={Styles.cardContainer} onPress={props.onPress}>
      {props.children}
    </Ripple>
  );
};

export {Card};
