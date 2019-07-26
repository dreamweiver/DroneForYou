import React from 'react';
import App from './../App';
import Dashboard from './../Dashboard/Dashboard';
import PageNotFound from './../PageNotFound/PageNotFound';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Routing = (
  <Router>
    <div>
    	<Switch>
	        <Route exact path="/" component={App} />
			<Route exact path="/home" component={App} />
			<PrivateRoute path='/dashboard' component={Dashboard} />
	        <Route component={PageNotFound} />
	    </Switch>
    </div>
  </Router>
)

export default Routing