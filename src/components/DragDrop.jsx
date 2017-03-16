import React, { Component, PropTypes } from 'react';
import DataTransfer from './DataTransfer';

export default class DragDrop extends Component {
	constructor (props) {
		super(props);
		this.handleDragover = this.handleDragover.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
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
		this.props.onDataTransfer(e.dataTransfer);
	}

	render () {
		return null;
	}
}

DragDrop.propTypes = {
	onDataTransfer: PropTypes.func.isRequired,
};
