import React, { Component } from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';
import stars from '../../public/stars.png';

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});

const StarryBackground = ({ children }) => (
	<Image source={stars} style={styles.content}>
		{children}
	</Image>
);

export default StarryBackground;
