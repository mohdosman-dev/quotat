import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import QuoteList from '../components/QuoteList';

import Styles from './styles';

class QuotesScreen extends Component {
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

export {QuotesScreen};
