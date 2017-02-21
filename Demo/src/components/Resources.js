import React, { Component } from 'react';
import { ListView } from 'react-native';
import { getResources } from '../api/SWApi';
import ListItem from './ListItem';

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
		<ListItem to={name}>{name}</ListItem>
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

