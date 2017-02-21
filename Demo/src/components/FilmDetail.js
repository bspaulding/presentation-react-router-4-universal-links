import React, { Component } from 'react';
import { View } from 'react-native';
import { getFilm } from '../api/SWApi';
import Loading from './Loading';
import Text from './Text';

class PlanetDetail extends Component {
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
			<View>
				<Text>{film.title}</Text>
			</View>
		);
	}
}

export default PlanetDetail;


