import React, { PropTypes } from 'react';
import DataTransfer from './DataTransfer';

const DataTransferList = ({ list }) => {
	const children = list.map((dt, i) => (
		<li className="dt-list-item" key={ i }>
			<DataTransfer data={ dt } />
		</li>
	));
	return (
		<div className="drag-drop">
			<ol className="dt-list">
				{ children }
			</ol>
		</div>
	);
};

DataTransferList.propTypes = {
	list: PropTypes.array.isRequired,
};

export default DataTransferList;
