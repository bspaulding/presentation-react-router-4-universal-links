import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

export default class NativeLink extends Component {
	render() {
		return (
			<Link {...this.props} component={TouchableOpacity}/>
		);
	}
}
