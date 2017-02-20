import React from "react";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import FakeBrowser from './FakeBrowser';

const Home = () => <div><h2 style={{ marginTop: 12 }}>Home</h2></div>
const About = () => <div><h2 style={{ marginTop: 12 }}>About</h2></div>;
const Topic = ({ match }) => <div><h3>{match.params.topicId}</h3></div>;
const Topics = ({ match }) => (
	<div style={{ textAlign: 'left' }}>
		<h2 style={{ marginTop: 12 }}>Topics</h2>
		<ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
			<li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
			<li><Link to={`${match.url}/components`}>Components</Link></li>
			<li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic}/>
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
		)}
		/>
	</div>
);

const BasicExample = () => (
	<Router>
		<FakeBrowser>
		<div style={{ backgroundColor: 'white', display: 'flex', height: '100%', flexDirection: 'row', height: 340, margin: '0px auto', minHeight: 340, width: 680 }}>
			<ul style={{
				borderRightWidth: 1,
				borderRightColor: '#ececec',
				borderRightStyle: 'solid',
				listStyleType: 'none',
				padding: 12,
				margin: 0,
				marginRight: 12
			}}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/topics">Topics</Link></li>
			</ul>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/topics" component={Topics}/>
		</div>
		</FakeBrowser>
	</Router>
);

export default BasicExample;
