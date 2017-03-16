import React, { Component } from 'react';
import DragDrop from './DragDrop';
import CopyPaste from './CopyPaste';
import DataTransferList from './DataTransferList';

export default class DataTransferContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dataTransfers: [],
		};
		this.handleDataTransfer = this.handleDataTransfer.bind(this);
	}

	handleDataTransfer (dt) {
		const data = {
			items: [...dt.items]
				.map((item) => ({
					kind: item.kind,
					type: item.type,
				})),
			types: [...dt.types],
			files: [...dt.files]
				.map((file) => ({
					lastModified: file.lastModified,
					name: file.name,
					size: file.size,
					type: file.type,
				})),
		};
		this.setState((state) => ({
			dataTransfers: state.dataTransfers.concat(data),
		}));
	}

	render () {
		const { dataTransfers } = this.state;
		return (
			<div className="dt-container">
				<DragDrop onDataTransfer={ this.handleDataTransfer } />
				<CopyPaste onDataTransfer={ this.handleDataTransfer } />
				<DataTransferList list={ dataTransfers } />
			</div>
		);
	}
}
