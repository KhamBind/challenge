import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Header from './Header';
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
					<Header />
					<Switch>
						<Route exact path='/machines/:machineid' component={Machine} />
							
						<Route exact path='/machines' component={Machines} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
