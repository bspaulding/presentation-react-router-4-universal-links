<Switch>
	<Route path="/about"
				 component={About}/>
	<Route path="/:user"
				 component={User}/>
	<Route component={NoMatch}/>
</Switch>
