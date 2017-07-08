import { combineReducers } from 'redux';
import * as dataTransfer from './reducer-data-transfer';
import * as data from './reducer-data';

export interface ReducerState {
	dataTransfer: dataTransfer.ReducerState;
	data: data.ReducerState;
}

export default combineReducers<ReducerState>({
	dataTransfer: dataTransfer.default,
	data: data.default,
});

export const getData = (state: ReducerState) => (
	data.getData(state.data)
);
