import React, {Component} from 'react';
import {View, ScrollView, Text, Image, UIManager, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Input, Button, LinkButton} from '../components/common';

import Styles from './styles';
import Form from '../components/Form';

class SignupScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    name: '',
  };

  render() {
    return (
      <View style={Styles.loginContainer}>
        <View style={Styles.topScreen}>
          <Image source={require('../assets/logo.png')} />
        </View>

        <ScrollView style={Styles.formContainer}>
          <Form title="Sing up">
            <Input
              lable="Full name"
              value={this.state.text}
              onChangeText={name => this.setState({name})}
              placeholder="e.g Mohammed Osman"
              onFocus={event => console.log('Text focused')}
              onBlur={event => console.log('Text blured')}
            />

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

            <Button
              text="Sing up"
              onPress={() => {
                console.log('registering');
              }}
            />

            <LinkButton
              message="Already have account ? "
              buttonText="Login"
              onPress={() => this.props.navigation.goBack()}
            />
          </Form>
        </ScrollView>
      </View>
    );
  }
}

export {SignupScreen};
