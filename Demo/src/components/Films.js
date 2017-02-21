import React, { Component } from 'react';
import { getFilms } from '../api/SWApi';
import ListView from './ListView';

class Films extends Component {
	render() {
		return (
			<ListView
				loader={getFilms}
				name='films'
			/>
		);
	}
}

export default Films;


