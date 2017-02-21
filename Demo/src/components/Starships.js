import React, { Component } from 'react';
import { getStarships } from '../api/SWApi';
import ListView from './ListView';

class Starships extends Component {
	render() {
		return (
			<ListView
				loader={getStarships}
				name='starships'
			/>
		);
	}
}

export default Starships;




