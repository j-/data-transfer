import React from 'react';
import DataTransferContainer from './DataTransferContainer';

const App = () => (
	<div>
		<h1>Data Transfer</h1>
		<p>Copy+paste or click+drag into this window.</p>
		<p>
			<label htmlFor="dummy-input">Use this text field to paste from a mobile device</label><br />
			<input type="text" id="dummy-input" />
		</p>
		<p><strong>Latest at top</strong></p>
		<DataTransferContainer />
	</div>
);

export default App;
