import React, { Component } from 'react';
import { View } from 'react-native';
import { getSpecies } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';

class SpeciesDetail extends Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const species = await getSpecies(id);
		this.setState({ species, loading: false });
	}

	render() {
		const { loading, species } = this.state;
		if (loading) {
			return <Loading/>;
		}

		return (
			<View>
				<Text>{species.name}</Text>
			</View>
		);
	}
}

export default SpeciesDetail;


