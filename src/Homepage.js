import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

function Homepage() {
	return (
		<div className="Homepage">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Counter />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default Homepage;
