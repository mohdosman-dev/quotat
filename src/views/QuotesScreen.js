import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Colors from '../components/common/Colors';
import QuoteList from '../components/QuoteList';

import Styles from './styles';

export default class Quotes extends Component {
  static navigationOptions = {
    title: 'All Quotes',
  };

  render() {
    return (
      <View style={Styles.container}>
        <QuoteList />
      </View>
    );
  }
}
