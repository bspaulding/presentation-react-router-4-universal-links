import React, { Component } from 'react';
import { View } from 'react-native';
import { getPerson } from '../api/SWApi';
import Loading from './Loading';
import Heading from './Heading';
import SectionHeading from './SectionHeading';
import { Stat, Stats } from './Stat';
import Request from './Request';
import Link from './Link';
import Text from './Text';
import LazyLinkList from './LazyLinkList';

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
				<Heading>{person.name}</Heading>
				<Stats>
					<Stat label="Birth Year">{person.birth_year}</Stat>
					<Stat label="Eye Color">{person.eye_color}</Stat>
					<Stat label="Gender">{person.gender}</Stat>
					<Stat label="Hair Color">{person.hair_color}</Stat>
					<Stat label="Height">{person.height}</Stat>
					<Stat label="Mass">{person.mass}</Stat>
					<Stat label="Skin Color">{person.skin_color}</Stat>
				</Stats>
				<SectionHeading>Films ({person.films.length})</SectionHeading>
				<LazyLinkList source={person} association="films"/>
				<SectionHeading>Starships ({person.starships.length})</SectionHeading>
				<LazyLinkList source={person} association="starships"/>
				<SectionHeading>Vehicles ({person.vehicles.length})</SectionHeading>
				<LazyLinkList source={person} association="vehicles"/>
			</View>
		);
	}
}

export default PersonDetail;
