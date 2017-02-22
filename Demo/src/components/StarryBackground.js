import React from 'react';
import stars from '../../public/beautiful-blue-stars-fill.jpg';

const styles = {
	content: {
		backgroundColor: 'transparent',
		backgroundImage: `url(${stars})`,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: 'scroll'
	}
};

const StarryBackground = ({ children }) => (
	<div style={styles.content}>
		{children}
	</div>
);

export default StarryBackground;
