import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Route from './Route';
import Switch from './Switch';
import Resources from './Resources';
import People from './People';
import PersonDetail from './PersonDetail';

const styles = StyleSheet.create({
	container: {
		padding: 12,
		marginTop: 20
	}
});

const NoMatch = ({ location }) => (
	<Text>No match for {location.pathname}</Text>
);

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Switch>
					<Route path="/" exact component={Resources}/>
					<Route path="/people" exact component={People}/>
					<Route path="/people/:id" exact component={PersonDetail}/>
					<Route component={NoMatch}/>
				</Switch>
			</View>
		);
	}
}

export default App;
