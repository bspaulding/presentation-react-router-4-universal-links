import React, { Component } from 'react';
import { ListView as RNListView } from 'react-native';
import { getFilms } from '../api/SWApi';
import ListItem from './ListItem';
import Loading from './Loading';

const getId = name => {
	const regex = new RegExp(`http:\/\/swapi.co\/api\/${name}\/(.*)\/`);
	return url => {
		const [_, id] = regex.exec(url);
		return id;
	};
};

class ListView extends Component {
	constructor(props) {
		super();

		this.getId = getId(props.name);
		this.state = {
			dataSource: new RNListView.DataSource({
				rowHasChanged: (a, b) => a !== b
			}).cloneWithRows([]),
			loading: true
		};
	}

	async componentDidMount() {
		const response = await this.props.loader();
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(
				response.results
			),
			loading: false
		});
	}

	renderRow = (entity) => (
		<ListItem to={`/${this.props.name}/${this.getId(entity.url)}`}>
			{entity.name || entity.title}
		</ListItem>
	);

	render() {
		const { loading } = this.state;
		return loading ? <Loading/> : (
			<RNListView
				dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={this.renderRow}
			/>
		);
	}
}

export default ListView;




