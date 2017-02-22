import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center'
	}
});

const Label = ({ children }) => (
	<Text style={styles.text}>{children}</Text>
);

export default Label;

