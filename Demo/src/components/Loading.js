import React, { Component } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';
import vader from '../../public/lightsaber-darth-vader.png';
import luke from '../../public/lightsaber-luke-rotj.png';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	image: {
		height: 212,
		width: 16
	}
});

class Loading extends Component {
	constructor() {
		super();
		this.animatedValue = new Animated.Value(0);
	}

	componentDidMount() {
		this.animate();
	}

	animate = () => {
		Animated.timing(this.animatedValue, {
			easing: Easing.elastic(),
			duration: 600,
			toValue: 1
		}).start(this.reverse);
	}

	reverse = () => {
		Animated.timing(this.animatedValue, {
			duration: 300,
			toValue: 0
		}).start(this.animate);
	}

	render() {
		const saber1 = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['-20deg', '45deg']
		});
		const saber2 = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['20deg', '-45deg']
		});
		const vaderRotation = {
			transform: [{ rotate: saber1 }]
		};
		const lukeRotation = {
			transform: [{ rotate: saber2 }]
		};
		return (
			<View style={styles.container}>
				<Animated.Image style={[styles.image, vaderRotation]} source={vader}/>
				<Animated.Image style={[styles.image, lukeRotation]} source={luke}/>
			</View>
		);
	}
}

export default Loading;
