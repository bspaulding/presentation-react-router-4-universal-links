import React, { Component } from 'react';
import { getPlanets } from '../api/SWApi';
import ListView from './ListView';

class Planets extends Component {
	render() {
		return (
			<ListView
				loader={getPlanets}
				name='planets'
			/>
		);
	}
}

export default Planets;


