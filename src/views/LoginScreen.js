import React, {Component} from 'react';
import {View, ScrollView, Text, Image, UIManager, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Input, Button, LinkButton} from '../components/common';

import Form from '../components/Form';

import Styles from './styles';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  if(PlatformAndroidStatic) {}

  state = {
    email: '',
    password: '',
  };

  _onPressLogin() {
    console.log('Login');
  }

  _onPressSignup() {}

  _onPressResetPassword() {
    console.log('Reset password');
  }

  render() {
    return (
      <View style={Styles.loginContainer}>
        <View style={Styles.topScreen}>
          <Image source={require('../assets/logo.png')} />
          <Text syle={{color: '#fff'}}>Quotat</Text>
          {/* <Text syle={Styles.topTitleText}></Text> */}
        </View>

        <ScrollView style={Styles.formContainer}>
          <Form title="LOGIN">
            <Input
              lable="Email"
              value={this.state.text}
              onChangeText={email => this.setState({email})}
              placeholder="user@example.com"
              onFocus={event => console.log('Text focused')}
              onBlur={event => console.log('Text blured')}
            />

            <Input
              lable="Password"
              value={this.state.text}
              onChangeText={password => this.setState({password})}
              placeholder="Password"
              onFocus={event => console.log('Text focused')}
              onBlur={event => console.log('Text blured')}
              secureTextEntry
            />

            <Button text="Login" onPress={this._onPressLogin} />

            <LinkButton
              message="Don't have account ? "
              buttonText="Sign Up"
              onPress={() => this.props.navigation.navigate('Signup')}
            />

            <LinkButton
              message="Forgot pasword ? "
              buttonText="Reset password"
              onPress={this._onPressResetPassword}
            />
          </Form>
        </ScrollView>
      </View>
    );
  }
}

export {LoginScreen};
