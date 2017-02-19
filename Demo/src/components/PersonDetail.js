import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { getPerson } from '../api/SWApi';
import Loading from './Loading';

class PersonDetail extends Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const person = await getPerson(id);
		this.setState({ person, loading: false });
	}

	render() {
		const { loading, person } = this.state;
		if (loading) {
			return <Loading/>;
		}

		return (
			<View>
				<Text>{person.name}</Text>
				<Text>{person.films.length} films</Text>
			</View>
		);
	}
}

export default PersonDetail;
