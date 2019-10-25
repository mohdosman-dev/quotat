import React, { Component } from 'react';
import {View} from 'react-native';

import Styles from './styles';

const Card = (props) => {
    console.log('Card loaded');
    return(
        <View style={Styles.cardContainer}>
            {props.children}
        </View>
    );
};

export default Card;
