import * as React from 'react';
import Ribbon from './Ribbon';
import Introduction from './Introduction';
import MobilePaste from './MobilePaste';
import Effects from '../containers/Effects';
import DataTransfer from '../containers/DataTransfer';
import './App.css';

const App = () => (
	<div className="App">
		<Ribbon />
		<h1>Data transfer</h1>
		<br />
		<Introduction />
		<br />
		<MobilePaste />
		<br />
		<br />
		<h2>Effects</h2>
		<Effects />
		<br />
		<h2>Data transfer items</h2>
		<DataTransfer />
	</div>
);

export default App;
