import React, { Component } from 'react';
import { View } from 'react-native';
import { getVehicle } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';
import Heading from './Heading';
import SectionHeading from './SectionHeading';
import LazyLinkList, { LazyLink } from './LazyLinkList';
import { Stats, Stat } from './Stat';

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
				<Heading>{vehicle.name}</Heading>
				<Stats>
					<Stat label="Cargo Capacity">{vehicle.cargo_capacity}</Stat>
					<Stat label="Consumables">{vehicle.consumables}</Stat>
					<Stat label="Cost (credits)">{vehicle.cost_in_credits}</Stat>
					<Stat label="Crew">{vehicle.crew}</Stat>
					<Stat label="Length">{vehicle.length}</Stat>
					<Stat label="Manufacturer">{vehicle.manufacturer}</Stat>
					<Stat label="Speed (Max Atmos.)">{vehicle.max_atmosphering_speed}</Stat>
					<Stat label="Model">{vehicle.model}</Stat>
					<Stat label="Passengers">{vehicle.passengers}</Stat>
					<Stat label="Class">{vehicle.vehicle_class}</Stat>
				</Stats>
				<SectionHeading>Films ({vehicle.films.length})</SectionHeading>
				<LazyLinkList source={vehicle} association="films"/>
				<SectionHeading>Pilots ({vehicle.pilots.length})</SectionHeading>
				<LazyLinkList source={vehicle} accessor="pilots" association="people"/>
			</View>
		);
	}
}

export default SpeciesDetail;



