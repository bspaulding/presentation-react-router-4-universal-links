import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import Link from './Link';

const styles = StyleSheet.create({
	text: {
		flex: 1,
		fontSize: 21,
		paddingVertical: 12,
		textAlign: 'center'
	}
});

const ListItem = ({ children, to }) => (
	<Link to={to}>
		<View>
			<Text style={styles.text}>{children}</Text>
		</View>
	</Link>
);

export default ListItem;
