import React, { Component } from 'react';
import { ListView } from 'react-native';
import { getPeople } from '../api/SWApi';
import Link from './Link';
import Text from './Text';

const getPersonId = (url) => {
	const [_, id] = /http:\/\/swapi.co\/api\/people\/(.*)\//.exec(url);
	return id;
};

class People extends Component {
	constructor() {
		super();

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (a, b) => a !== b
			}).cloneWithRows([])
		};
	}

	async componentDidMount() {
		const response = await getPeople();
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(
				response.results
			)
		});
	}

	renderRow = (person) => (
		<Link to={`/people/${getPersonId(person.url)}`}>
			<Text>{person.name}</Text>
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

export default People;


