import React, {Component} from 'react';
import {View, AppRegistry, Text, ToolbarAndroid} from 'react-native';
import Section from '../components/Section';

import Styles from './styles';

export default class HomeScreen extends Component {
  onActionSelected(pos) {
    if (pos === 0) {
      console.log('Share selected');
    }
  }

  render() {
    return(
      <View style={{
        flex: 1,
        minHeight: 760,
        margin: 0,
        padding: 0,
        flexGrow: 1
      }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{ flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{ flex: 1, backgroundColor: 'steelblue'}} />
      </View>
      
    );
  }
}
