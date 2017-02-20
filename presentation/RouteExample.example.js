// Now it's just a simple component
<Route path="/topics" component={TopicsList}/>

// Nest routes by...nesting Routes!
const TopicsList = ({ match }) => (<div>
	<Link to={`#{match.url}/topic-one`}>One</Link>
	<Link to={`#{match.url}/topic-two`}>Two</Link>

	<Route path={`${match.url}/:topicId`}
				 component={TopicDetail}/>
</div>);
