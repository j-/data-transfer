import * as React from 'react';
import './PasteInput.css';

const cancel: React.EventHandler<React.SyntheticEvent<HTMLElement>> = (e) => e.preventDefault();

const PasteInput: React.StatelessComponent = () => (
	<div className="PasteInput">
		<textarea
			className="PasteInput-textarea form-control d-block"
			type="text"
			placeholder="Mobile devices: long press and select 'Paste'\nDesktops/laptops: right click and select 'Paste'"
			value=""
			onInput={cancel}
			onChange={cancel}
		/>
	</div>
);

export default PasteInput;
