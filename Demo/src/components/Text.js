import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const styles = StyleSheet.create({
	defaults: {
		color: 'white',
		fontFamily: 'STARWARS'
	}
});

const Text = (props) => <RNText {...props} style={[styles.defaults, props.style]}/>

export default Text;
