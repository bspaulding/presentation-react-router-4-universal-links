import {
// composes MemoryRouter with AsyncStorage
	NativeRouter as Router,
// listens to url events, updates router
	DeepLinking
} from 'react-router-native';

const App = () => (
	<Router>
		<DeepLinking/>
		// etc.
	</Router>
);
