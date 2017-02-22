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
import { getId } from './ListView';

const getFilmId = getId('films');
const getStarshipId = getId('starships');
const getVehicleId = getId('vehicles');

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
				{person.films.map(url => (
					<Request key={url} url={url}>
						{(film) => (
							<Link key={url} to={`/films/${getFilmId(url)}`}>
								<Text>{film.title}</Text>
							</Link>
						)}
					</Request>
				))}
				<SectionHeading>Starships ({person.starships.length})</SectionHeading>
				{person.starships.map(url => (
					<Request key={url} url={url}>
						{(ship) => (
							<Link key={url} to={`/starships/${getStarshipId(url)}`}>
								<Text>{ship.name}</Text>
							</Link>
						)}
					</Request>
				))}
				<SectionHeading>Vehicles ({person.vehicles.length})</SectionHeading>
				{person.vehicles.map(url => (
					<Request key={url} url={url}>
						{(vehicle) => (
							<Link key={url} to={`/vehicles/${getVehicleId(url)}`}>
								<Text>{vehicle.name}</Text>
							</Link>
						)}
					</Request>
				))}
			</View>
		);
	}
}

export default PersonDetail;
