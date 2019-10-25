import React, {Component} from 'react';
import ToolbarAndroid, {View, AppRegistry, Text} from 'react-native';

import Section from '../components/Section';
import Toolbar from '../components/common/Toobar';

import Styles from './styles';

import Colors from '../components/common/Colors'

export default class HomeScreen extends Component {
  onActionSelected(pos) {
    if (pos === 0) {
      console.log('Share selected');
    }
  }

  navigation = this.props.navigation;

  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    
    return (
      <View style={Styles.container}>
        {/* <Toolbar title="Quotat"/> */}
        <Section
          img={require('../assets/icons/quotes.png')}
          catalog="All Quotes"
          onPress={() => this.props.navigation.navigate('Quotes')}
        />
        <Section
          img={require('../assets/icons/category.png')}
          catalog="Categories"
          onPress={() => this.props.navigation.navigate('Categories')}
        />
        <Section
          img={require('../assets/icons/author.png')}
          catalog="Quotes By Authors"
          onPress={() => this.props.navigation.navigate('Authors')}
        />
        <Section
          img={require('../assets/icons/fav.png')}
          catalog="Favuorite Quotes"
          onPress={() => this.props.navigation.navigate('Favuorites')}
        />
      </View>
    );
  }
}
