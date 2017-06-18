import { combineReducers } from 'redux';
import * as dataTransfers from './reducer-data-transfers';

export interface ReducerState {
	dataTransfers: dataTransfers.ReducerState;
}

export default combineReducers<ReducerState>({
	dataTransfers: dataTransfers.default,
});

export const getDataTransfers = (state: ReducerState) => (
	dataTransfers.getDataTransfers(state.dataTransfers)
);
