import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';
import { getResources } from '../api/SWApi';
import Link from './Link';

const styles = StyleSheet.create({
});

class Resources extends Component {
	constructor() {
		super();

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (a, b) => a !== b
			}).cloneWithRows([])
		};
	}

	async componentDidMount() {
		const resources = await getResources();
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(
				Object.keys(resources)
			)
		});
	}

	renderRow = (name) => (
		<Link to={name}>
			{name}
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

