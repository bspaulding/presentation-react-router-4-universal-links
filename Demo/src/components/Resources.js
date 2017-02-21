import React, { Component } from 'react';
import { ListView } from 'react-native';
import { getResources } from '../api/SWApi';
import Link from './Link';
import Text from './Text';

class Resources extends Component {
	constructor() {
		super();

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (a, b) => a !== b
			}).cloneWithRows([
				'people',
				'planets',
				'films',
				'species',
				'vehicles',
				'starships'
			])
		};
	}

	renderRow = (name) => (
		<Link to={name}>
			<Text>{name}</Text>
		</Link>
	);

	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={this.renderRow}
			/>
		);
	}
}

export default Resources;

