import React, { Component } from 'react';
import { getPeople } from '../api/SWApi';
import ListView from './ListView';

class People extends Component {
	render() {
		return (
			<ListView
				loader={getPeople}
				name='people'
			/>
		);
	}
}

export default People;


