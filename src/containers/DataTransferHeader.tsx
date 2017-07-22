import * as React from 'react';
import { connect } from 'react-redux';
import { ReducerState, getData } from '../store';

interface Props {
	count: number;
}

const DataTransferHeader = ({ count }: Props) => (
	count === 0 ?
		<h2>Data transfer items</h2> :
		<h2>Data transfer items ({count})</h2>
);

const mapStateToProps = (state: ReducerState) => ({
	count: getData(state).length,
});

const mergeProps = (stateProps: Props) => ({
	...stateProps
});

export default connect(
	mapStateToProps,
	null,
	mergeProps
)(DataTransferHeader);
