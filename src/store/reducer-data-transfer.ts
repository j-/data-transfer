import { combineReducers } from 'redux';
import * as types from './reducer-data-transfer-types';

export interface ReducerState {
	types: types.ReducerState;
}

export default combineReducers<ReducerState>({
	types: types.default,
});
