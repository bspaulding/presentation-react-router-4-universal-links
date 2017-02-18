import React, { Component } from 'react';
import { Text } from 'react-native';
import Route from './Route';
import Switch from './Switch';
import Resources from './Resources';
import People from './People';
import PersonDetail from './PersonDetail';

const NoMatch = ({ location }) => (
	<Text>No match for {location.pathname}</Text>
);

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Resources}/>
				<Route path="/people" exact component={People}/>
				<Route path="/people/:id" exact component={PersonDetail}/>
				<Route component={NoMatch}/>
			</Switch>
		);
	}
}

export default App;
