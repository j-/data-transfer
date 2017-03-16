import React, { Component } from 'react';
import DataTransfer from './DataTransfer';

export default class DragDrop extends Component {
	constructor (props) {
		super(props);
		this.handleDragover = this.handleDragover.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
		this.state = {
			dropped: [],
		};
	}

	componentDidMount () {
		window.addEventListener('dragover', this.handleDragover);
		window.addEventListener('drop', this.handleDrop);
	}

	componentWillUnmount () {
		window.removeEventListener('dragover', this.handleDragover);
		window.removeEventListener('drop', this.handleDrop);
	}

	handleDragover (e) {
		e.preventDefault();
	}

	handleDrop (e) {
		e.preventDefault();
		const dt = e.dataTransfer;
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
		this.setState((state) => {
			return {
				dropped: state.dropped.concat(data),
			};
		});
	}

	render () {
		const { dropped } = this.state;
		const children = dropped.map((data, i) => (
			<li className="dt-list-item" key={ i }>
				<DataTransfer data={ data } />
			</li>
		));
		return (
			<div className="drag-drop">
				<ol className="dt-list">
					{ children }
				</ol>
			</div>
		);
	}
}
