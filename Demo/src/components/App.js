import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Route from './Route';
import Switch from './Switch';
import Resources from './Resources';
import People from './People';
import Planets from './Planets';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import PersonDetail from './PersonDetail';
import PlanetDetail from './PlanetDetail';
import FilmDetail from './FilmDetail';
import SpeciesDetail from './SpeciesDetail';
import VehicleDetail from './VehicleDetail';
import StarshipDetail from './StarshipDetail';
import StarryBackground from './StarryBackground';
import Text from './Text';

const styles = StyleSheet.create({
	container: {
		padding: 12,
		marginTop: 20,
		flex: 1
	}
});

const NoMatch = ({ location }) => (
	<Text>No match for {location.pathname}</Text>
);

class App extends Component {
	render() {
		return (
			<StarryBackground>
				<View style={styles.container}>
					<Switch>
						<Route path="/" exact component={Resources}/>
						<Route path="/people" exact component={People}/>
						<Route path="/people/:id" exact component={PersonDetail}/>
						<Route path="/planets" exact component={Planets}/>
						<Route path="/planets/:id" exact component={PlanetDetail}/>
						<Route path="/films" exact component={Films}/>
						<Route path="/films/:id" exact component={FilmDetail}/>
						<Route path="/species" exact component={Species}/>
						<Route path="/species/:id" exact component={SpeciesDetail}/>
						<Route path="/vehicles" exact component={Vehicles}/>
						<Route path="/vehicles/:id" exact component={VehicleDetail}/>
						<Route path="/starships" exact component={Starships}/>
						<Route path="/starships/:id" exact component={StarshipDetail}/>
						<Route component={NoMatch}/>
					</Switch>
				</View>
			</StarryBackground>
		);
	}
}

export default App;
