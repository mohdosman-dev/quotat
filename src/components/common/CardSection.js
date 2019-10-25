import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Styles from './styles';

const CardSection = (props) => {
    return (
        <View style={Styles.cardSectionContainer}>
            {props.children}
        </View>
    );
}

export default CardSection;