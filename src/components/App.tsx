import * as React from 'react';
import Ribbon from './Ribbon';
import Introduction from './Introduction';
import PasteInput from './PasteInput';
import Effects from '../containers/Effects';
import DataTransferHeader from '../containers/DataTransferHeader';
import DataTransfer from '../containers/DataTransfer';
import './App.css';

const App = () => (
	<div className="App">
		<Ribbon />
		<h1>Data transfer</h1>
		<br />
		<Introduction />
		<br />
		<PasteInput />
		<br />
		<br />
		<h2>Effects</h2>
		<Effects />
		<br />
		<DataTransferHeader />
		<DataTransfer />
	</div>
);

export default App;
