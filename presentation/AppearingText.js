import React from 'react';
import { Appear, Text } from 'spectacle';

export default (props) => (
	<Appear>
		<Text {...props}/>
	</Appear>
);
