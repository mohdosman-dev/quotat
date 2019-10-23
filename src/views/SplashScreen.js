import React, { Component } from 'react';
import {AppRegistry, View, Image, Text, ActivityIndicator} from 'react-native';

class SplashScreen extends Component {
    constructor() {
        this.state = {
            splashTime: 3000
        }
    }

    render() {
        return(
            <View>
                <Image source={require('../assets/logo.png')} />
                <Text>Qoutat</Text>
                <Text></Text>
                <View>
                    <ActivityIndicator animating />
                    <Text>Connecting ...</Text>
                </View>
            </View>
        );
    }
}


AppRegistry.registerComponent('SpashScreen', () => SplashScreen);