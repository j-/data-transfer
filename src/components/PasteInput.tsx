import * as React from 'react';
import './PasteInput.css';

const PasteInput = () => (
	<div>
		<textarea
			className="PasteInput pt-input pt-large pt-fill"
			type="text"
			placeholder="Mobile devices: long press and select 'Paste'\nDesktops/laptops: right click and select 'Paste'"
		/>
	</div>
);

export default PasteInput;
