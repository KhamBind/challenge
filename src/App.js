import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Machines from './Machines';
import Machine from './Machine';
import './App.css';

import { Provider } from 'react-redux'
import { configureStore } from './store'
const store = configureStore()

function App () {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<header className='App-header'>
						<img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
					</header>

					<nav className='App-nav'>
						<Link to='/'>Home</Link>
						<Link to='/machines'>Machines</Link>
					</nav>

					<Switch>
						<Route path='/machines/:machineid' component={Machine} />
							
						<Route path='/machines'>
							<Machines />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
