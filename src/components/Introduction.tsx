import * as React from 'react';

const Introduction: React.StatelessComponent = () => (
	<div>
		<p>
			The <a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer">DataTransfer</a> object
			is used to hold the data that is being dragged during
			a <a href="https://developer.mozilla.org/en-US/docs/Web/API/DragEvent">drag and drop operation</a>,
			as well as the data that is being pasted during
			a <a href="https://developer.mozilla.org/en-US/docs/Web/Events/paste">paste event</a>.
			It may hold one or more data items, each of one or
			more data types.
		</p>
		<p>
			To inspect DataTransfer data: drag and drop things onto this page,
			or paste some data (using Ctrl+V or the below text input).
		</p>
	</div>
);

export default Introduction;
