import React, {Component} from 'react';
import ToolbarAndroid, {View, AppRegistry, Text} from 'react-native';

import Section from '../components/Section';
import Toolbar from '../components/common/Toobar';

import Styles from './styles';

export default class HomeScreen extends Component {
  onActionSelected(pos) {
    if (pos === 0) {
      console.log('Share selected');
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Toolbar title="Quotat"/>
        <Section
          img={require('../assets/icons/quotes.png')}
          catalog="All Quotes"
        />
        <Section
          img={require('../assets/icons/category.png')}
          catalog="Categories"
        />
        <Section
          img={require('../assets/icons/author.png')}
          catalog="Quotes By Authors"
        />
        <Section
          img={require('../assets/icons/fav.png')}
          catalog="Favuorite Quotes"
        />
      </View>
    );
  }
}
