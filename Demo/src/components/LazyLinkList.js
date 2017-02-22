import React from 'react';
import { View } from 'react-native';
import Link from './Link';
import Text from './Text';
import Request from './Request';
import { getId } from './ListView';

export const LazyLink = ({ association, url }) => (
	<Request key={url} url={url}>
		{(object) => (
			<Link key={url} to={`/${association}/${getId(association)(url)}`}>
				<Text>{object.name || object.title}</Text>
			</Link>
		)}
	</Request>
);

const LazyLinkList = ({ accessor, association, source }) => {
	return (
		<View>
			{source[accessor || association].map(url => (
				<LazyLink url={url} association={association}/>
			))}
		</View>
	);
};

export default LazyLinkList;
