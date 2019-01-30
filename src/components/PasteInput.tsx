import * as React from 'react';
import './PasteInput.css';

const PasteInput = () => (
	<div className="PasteInput">
		<textarea
			className="PasteInput-textarea form-control d-block"
			type="text"
			placeholder="Mobile devices: long press and select 'Paste'\nDesktops/laptops: right click and select 'Paste'"
		/>
	</div>
);

export default PasteInput;
