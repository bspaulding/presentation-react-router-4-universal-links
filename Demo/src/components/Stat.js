import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

export default function groupByEveryN<T>(array: Array<T>, n: number): Array<Array<?T>> {
	var result = [];
	var temp = [];

	for (var i = 0; i < array.length; ++i) {
		if (i > 0 && i % n === 0) {
			result.push(temp);
			temp = [];
		}
		temp.push(array[i]);
	}

	if (temp.length > 0) {
		while (temp.length !== n) {
			temp.push(null);
		}
		result.push(temp);
	}

	return result;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	text: {
		fontSize: 16,
		textAlign: 'left'
	},
	label: {
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'left'
	},
	stats: {
		flexDirection: 'column'
	},
	statsRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginVertical: 12
	}
});

export const Stat = ({ children, label }) => (
	<View style={styles.container}>
		<Text style={styles.label}>{label}</Text>
		<Text style={styles.text}>{children}</Text>
	</View>
);

export const Stats = ({ children }) => (
	<View style={styles.stats}>
		{groupByEveryN(children, 3).map((row, i) => (
			<View key={i} style={styles.statsRow}>
				{row}
			</View>
		))}
	</View>
);

