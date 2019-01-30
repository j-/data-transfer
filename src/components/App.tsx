import * as React from 'react';
import Introduction from './Introduction';
import PasteInput from './PasteInput';
import Effects from '../containers/Effects';
import DataTransferHeader from '../containers/DataTransferHeader';
import DataTransfer from '../containers/DataTransfer';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<a href="https://skeoh.com" className="text-muted">&larr; skeoh.com</a>
		<h1 className="mb-5">Data transfer</h1>

		<div className="mb-5">
			<Introduction />
			<PasteInput />
		</div>

		<h2 className="mt-5 mb-3">Effects</h2>
		<Effects />

		<DataTransferHeader />
		<DataTransfer />
	</div>
);

export default App;
