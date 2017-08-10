import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Position from './pages/Position';
import Seach from './pages/Seach';
import Mein from './pages/Mein';
import Job from './pages/Job';
import Send from './components/Send'
import {Router, Route,hashHistory, browserHistory,IndexRoute} from 'react-router';


ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Position} />
			<Route path="seach" component={Seach}/>
			<Route path="mein" component={Mein}/>	
		</Route>
		<Route path="/login" component={Login}></Route>
		<Route path="register" component={Register}></Route>
		<Route path="job" component={Job}></Route>

	</Router>
)
, 
document.getElementById('root')
);
