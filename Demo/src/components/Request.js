import React, { Component } from 'react';

class Request extends Component {
	constructor() {
		super();
		this.state = {};
	}

	async componentWillMount() {
		const response = await fetch(this.props.url.replace("http://", "https://"));
		const json = await response.json();
		this.setState({ response: json });
	}

	render() {
		const { response } = this.state;
		return response ? this.props.children(response) : null;
	}
}

export default Request;
