import { combineReducers } from 'redux';
import * as dataTransfer from './reducer-data-transfer';
import * as data from './reducer-data';
import * as effects from './reducer-effects';

export interface ReducerState {
	dataTransfer: dataTransfer.ReducerState;
	data: data.ReducerState;
	effects: effects.ReducerState;
}

export default combineReducers<ReducerState>({
	dataTransfer: dataTransfer.default,
	data: data.default,
	effects: effects.default,
});

export const getData = (state: ReducerState) => (
	data.getData(state.data)
);

export const getDropEffect = (state: ReducerState) => (
	effects.getDropEffect(state.effects)
);

export const getEffectAllowed = (state: ReducerState) => (
	effects.getEffectAllowed(state.effects)
);
