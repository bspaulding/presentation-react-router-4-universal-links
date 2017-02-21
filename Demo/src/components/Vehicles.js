import React, { Component } from 'react';
import { getVehicles } from '../api/SWApi';
import ListView from './ListView';

class Vehicles extends Component {
	render() {
		return (
			<ListView
				loader={getVehicles}
				name='vehicles'
			/>
		);
	}
}

export default Vehicles;



