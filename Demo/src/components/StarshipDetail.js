import React, { Component } from 'react';
import { View } from 'react-native';
import { getStarship } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';

class SpeciesDetail extends Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const starship = await getStarship(id);
		this.setState({ starship, loading: false });
	}

	render() {
		const { loading, starship } = this.state;
		if (loading) {
			return <Loading/>;
		}

		return (
			<View>
				<Text>{starship.name}</Text>
			</View>
		);
	}
}

export default SpeciesDetail;




