import React, { Component } from 'react';
import { View } from 'react-native';
import { getPlanet } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';
import Heading from './Heading';
import SectionHeading from './SectionHeading';
import LazyLinkList from './LazyLinkList';
import { Stats, Stat } from './Stat';

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
				<Heading>{planet.name}</Heading>
				<Stats>
					<Stat label="Climate">{planet.climate}</Stat>
					<Stat label="Diameter">{planet.diameter}</Stat>
					<Stat label="Gravity">{planet.gravity}</Stat>
					<Stat label="Orbital Period">{planet.orbital_period}</Stat>
					<Stat label="Population">{planet.population}</Stat>
					<Stat label="Rotation Period">{planet.rotation_period}</Stat>
					<Stat label="Surface Water">{planet.surface_water}</Stat>
					<Stat label="Terrain">{planet.terrain}</Stat>
				</Stats>
				<SectionHeading>Films ({planet.films.length})</SectionHeading>
				<LazyLinkList source={planet} association="films"/>
				<SectionHeading>Residents ({planet.residents.length})</SectionHeading>
				<LazyLinkList source={planet} accessor="residents" association="people"/>
			</View>
		);
	}
}

export default PlanetDetail;

