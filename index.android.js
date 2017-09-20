/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import App from './scene/Router';
export default class demo1 extends Component {

    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('demo1', () => demo1);