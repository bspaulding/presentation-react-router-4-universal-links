import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { getFilm } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';
import Heading from './Heading';
import SectionHeading from './SectionHeading';
import { Stat, Stats } from './Stat';
import LazyLinkList from './LazyLinkList';

const styles = StyleSheet.create({
	crawl: {
	}
});

class FilmDetail extends Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const film = await getFilm(id);
		this.setState({ film, loading: false });
	}

	render() {
		const { loading, film } = this.state;
		if (loading) {
			return <Loading/>;
		}

		return (
			<ScrollView>
				<Heading>{film.title}</Heading>
				<Stats>
					<Stat label="Episode #">{film.episode_id}</Stat>
					<Stat label="Director">{film.director}</Stat>
					<Stat label="Producer">{film.producer}</Stat>
					<Stat label="Release Date">{film.release_date}</Stat>
				</Stats>
				<SectionHeading>Opening Crawl</SectionHeading>
				<Text style={styles.crawl}>{film.opening_crawl}</Text>
				<SectionHeading>Characters ({film.characters.length})</SectionHeading>
				<LazyLinkList source={film} accessor="characters" association="people"/>
				<SectionHeading>Planets ({film.planets.length})</SectionHeading>
				<LazyLinkList source={film} association="planets"/>
				<SectionHeading>Species ({film.species.length})</SectionHeading>
				<LazyLinkList source={film} association="species"/>
				<SectionHeading>Starships ({film.starships.length})</SectionHeading>
				<LazyLinkList source={film} association="starships"/>
				<SectionHeading>Vehicles ({film.vehicles.length})</SectionHeading>
				<LazyLinkList source={film} association="vehicles"/>
			</ScrollView>
		);
	}
}

export default FilmDetail;


