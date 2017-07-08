import * as React from 'react';
import MobilePaste from './MobilePaste';
import Effects from '../containers/Effects';
import DataTransfer from '../containers/DataTransfer';
import './App.css';

const App = () => (
	<div className="App">
		<h1>Data transfer</h1>
		<p>Copy+paste or click+drag into this window.</p>
		<MobilePaste />
		<Effects />
		<DataTransfer />
	</div>
);

export default App;
