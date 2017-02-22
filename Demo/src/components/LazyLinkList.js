import React from 'react';
import { View } from 'react-native';
import Link from './Link';
import Text from './Text';
import Request from './Request';
import { getId } from './ListView';

const LazyLinkList = ({ association, source }) => {
	return (
		<View>
			{source[association].map(url => (
				<Request key={url} url={url}>
					{(object) => (
						<Link key={url} to={`/${association}/${getId(association)(url)}`}>
							<Text>{object.name || object.title}</Text>
						</Link>
					)}
				</Request>
			))}
		</View>
	);
};

export default LazyLinkList;
