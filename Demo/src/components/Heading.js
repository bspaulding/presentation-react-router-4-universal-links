import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		textAlign: 'center'
	}
});

const Heading = ({ children }) => (
	<Text style={styles.text}>{children}</Text>
);

export default Heading;
