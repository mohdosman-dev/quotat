import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Toolbar from '../components/common/Toobar'

import Styles from './styles'

export default class Quotes extends Component {
    constructor(probs) {

    }

    componentWillMount() {

    }

    render() {
        return (
            <ScrollView style={Styles.container}>
                <Toolbar title="All Quotes" navigate={this.props.navigation} />
                <Text>All Quotes</Text>
            </ScrollView>
        );
    }
}