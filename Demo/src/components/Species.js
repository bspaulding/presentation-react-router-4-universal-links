import React, { Component } from 'react';
import { getAllSpecies } from '../api/SWApi';
import ListView from './ListView';

class Species extends Component {
	render() {
		return (
			<ListView
				loader={getAllSpecies}
				name='species'
			/>
		);
	}
}

export default Species;


