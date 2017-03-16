import React, { Component, PropTypes } from 'react';
import DataTransfer from './DataTransfer';

export default class CopyPaste extends Component {
	constructor (props) {
		super(props);
		this.handlePaste = this.handlePaste.bind(this);
	}

	componentDidMount () {
		window.addEventListener('paste', this.handlePaste);
	}

	componentWillUnmount () {
		window.removeEventListener('paste', this.handlePaste);
	}

	handlePaste (e) {
		e.preventDefault();
		this.props.onDataTransfer(e.clipboardData);
	}

	render () {
		return null;
	}
}

CopyPaste.propTypes = {
	onDataTransfer: PropTypes.func.isRequired,
};
