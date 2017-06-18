import * as React from 'react';
import DataTransfers from '../containers/DataTransfers';

class App extends React.Component<{}, null> {
	render() {
		return (
			<div className="App">
				<DataTransfers
					addDataTransfer={(dt) => (dt)}
					dataTransfers={[]}
				/>
			</div>
		);
	}
}

export default App;
