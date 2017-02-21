import React, { Component } from 'react';
import { ListView } from 'react-native';
import { getPeople } from '../api/SWApi';
import ListItem from './ListItem';
import Loading from './Loading';

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
			}).cloneWithRows([]),
			loading: true
		};
	}

	async componentDidMount() {
		const response = await getPeople();
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(
				response.results
			),
			loading: false
		});
	}

	renderRow = (person) => (
		<ListItem to={`/people/${getPersonId(person.url)}`}>
			{person.name}
		</ListItem>
	);

	render() {
		const { loading } = this.state;
		return loading ? <Loading/> : (
			<ListView
				dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={this.renderRow}
			/>
		);
	}
}

export default People;


