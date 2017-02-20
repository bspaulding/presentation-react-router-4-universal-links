import { Linking } from 'react-native';

class DeepLinking extends Component {
	componentDidMount() {
		Linking.addEventListener('url', this._handleOpenURL);
	}
	componentWillUnmount() {
		Linking.removeEventListener('url', this._handleOpenURL);
	}
	_handleOpenURL(event) {
		// Push url onto router here
		console.log(event.url);
	}
}
