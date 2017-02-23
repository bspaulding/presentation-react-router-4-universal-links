import React, { Component } from 'react';
import { View } from 'react-native';
import { getStarship } from '../api/SWApi';
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
				<Heading>{starship.name}</Heading>
				<Stats>
					<Stat label="MGLT">{starship.MGLT}</Stat>
					<Stat label="Cargo Capacity">{starship.cargo_capacity}</Stat>
					<Stat label="Consumables">{starship.consumables}</Stat>
					<Stat label="Cost (credits)">{starship.cost_in_credits}</Stat>
					<Stat label="Crew">{starship.crew}</Stat>
					<Stat label="Hyperdrive Rating">{starship.hyperdrive_rating}</Stat>
					<Stat label="Length">{starship.length}</Stat>
					<Stat label="Manufacturer">{starship.manufacturer}</Stat>
					<Stat label="Speed (Max Atmos.)">{starship.max_atmosphering_speed}</Stat>
					<Stat label="Model">{starship.model}</Stat>
					<Stat label="Passengers">{starship.passengers}</Stat>
					<Stat label="Class">{starship.starship_class}</Stat>
				</Stats>
				<SectionHeading>Films ({starship.films.length})</SectionHeading>
				<LazyLinkList source={starship} association="films"/>
				<SectionHeading>Pilots ({starship.pilots.length})</SectionHeading>
				<LazyLinkList source={starship} accessor="pilots" association="people"/>
			</View>
		);
	}
}

export default SpeciesDetail;




