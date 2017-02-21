/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native';
import App from './src/components/App';
import { NativeRouter as Router } from 'react-router-native';
import DeepLinking from './src/components/DeepLinking';

export default class Demo extends Component {
	render() {
		return (
			<Router>
				<View>
					<DeepLinking/>
					<App/>
					<StatusBar barStyle="light-content"/>
				</View>
			</Router>
		);
	}
}

AppRegistry.registerComponent('Demo', () => Demo);

