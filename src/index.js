import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {Page1, Page2, NotFound, Template} from './App';
import './index.css';


render((
  <Router history={hashHistory}>
    <Route path="/" component={Template}>
    	<IndexRoute component={Page1}/>
	    <Route path="/page1" component={Page1}/>
	    <Route path="/page2" component={Page2}/>
    </Route>
	<Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'))
