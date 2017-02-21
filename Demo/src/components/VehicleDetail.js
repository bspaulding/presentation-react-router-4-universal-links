import React, { Component } from 'react';
import { View } from 'react-native';
import { getVehicle } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';

class SpeciesDetail extends Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const vehicle = await getVehicle(id);
		this.setState({ vehicle, loading: false });
	}

	render() {
		const { loading, vehicle } = this.state;
		if (loading) {
			return <Loading/>;
		}

		return (
			<View>
				<Text>{vehicle.name}</Text>
			</View>
		);
	}
}

export default SpeciesDetail;



