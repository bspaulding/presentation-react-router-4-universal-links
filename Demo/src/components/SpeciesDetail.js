import React, { Component } from 'react';
import { View } from 'react-native';
import { getSpecies } from '../api/SWApi';
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
				<Heading>{species.name}</Heading>
				<Stats>
					<Stat label="Height (avg)">{species.average_height}</Stat>
					<Stat label="Lifespan (avg)">{species.average_lifespan}</Stat>
					<Stat label="Classification">{species.classification}</Stat>
					<Stat label="Designation">{species.designation}</Stat>
					<Stat label="Eye Colors">{species.eye_colors}</Stat>
					<Stat label="Hair Colors">{species.hair_colors}</Stat>
					<Stat label="Language">{species.language}</Stat>
					<Stat label="Skin Colors">{species.skin_colors}</Stat>
					<Stat label="Homeworld"><LazyLink url={species.homeworld} association="planets"/></Stat>
				</Stats>
				<SectionHeading>Films ({species.films.length})</SectionHeading>
				<LazyLinkList source={species} association="films"/>
				<SectionHeading>People ({species.people.length})</SectionHeading>
				<LazyLinkList source={species} association="people"/>
			</View>
		);
	}
}

export default SpeciesDetail;


