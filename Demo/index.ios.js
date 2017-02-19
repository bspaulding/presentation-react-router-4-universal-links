/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/components/App';
import { NativeRouter as Router } from 'react-router-native';

export default class Demo extends Component {
  render() {
    return (
			<Router>
				<App/>
			</Router>
    );
  }
}

AppRegistry.registerComponent('Demo', () => Demo);
