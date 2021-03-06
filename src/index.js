import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import {Page1, Page2, NotFound, App} from './App';
import './index.css';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRedirect to="/page1" />
	    <Route path="/page1" component={Page1}/>
	    <Route path="/page2" component={Page2}/>
		<Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('root'))
