import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	container: {
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		borderStyle: 'solid',
		marginVertical: 12,
		paddingBottom: 6,
	},
	text: {
		fontSize: 18,
		textAlign: 'center'
	}
});

const Heading = ({ children }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{children}</Text>
	</View>
);

export default Heading;

