import React, {Component} from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from './styles';

class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }
  _bootstrapAsync = async () => {
    try {
      const userToken = await AsyncStorage.getItem('@userToken');
      console.log(userToken);

      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={Styles.splashScreenContainer}>
        <View style={Styles.splashTop}>
          <Image source={require('../assets/logo.png')} />
          <Text style={Styles.splashText}>Qoutat</Text>
        </View>
        <View style={Styles.splashBottom}>
          <ActivityIndicator animating />
          <Text style={Styles.splashText}>Connecting ...</Text>
        </View>
      </View>
    );
  }
}

export {SplashScreen};
