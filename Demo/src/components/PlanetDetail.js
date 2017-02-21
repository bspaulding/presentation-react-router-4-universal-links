import React, { Component } from 'react';
import { View } from 'react-native';
import { getPlanet } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';

class PlanetDetail extends Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const planet = await getPlanet(id);
		this.setState({ planet, loading: false });
	}

	render() {
		const { loading, planet } = this.state;
		if (loading) {
			return <Loading/>;
		}

		return (
			<View>
				<Text>{planet.name}</Text>
			</View>
		);
	}
}

export default PlanetDetail;

