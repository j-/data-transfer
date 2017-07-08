import * as React from 'react';
import DataTransfer from '../containers/DataTransfer';
import MobilePaste from './MobilePaste';
import './App.css';

const App = () => (
	<div className="App">
		<h1>Data transfer</h1>
		<p>Copy+paste or click+drag into this window.</p>
		<MobilePaste />
		<DataTransfer />
	</div>
);

export default App;
