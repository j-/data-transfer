import { Action } from 'redux';
import { isActionTransferData } from './actions';
import { DropEffect, EffectAllowed } from '../types';

export interface ReducerState {
	dropEffect: DropEffect | null;
	effectAllowed: EffectAllowed | null;
}

const DEFAULT_STATE: ReducerState = {
	dropEffect: null,
	effectAllowed: null,
};

export default (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState => {
	if (isActionTransferData(action)) {
		const { dropEffect, effectAllowed } = action.payload.dataTransfer;
		return {
			...state,
			dropEffect: dropEffect as DropEffect,
			effectAllowed: effectAllowed as EffectAllowed,
		};
	}

	return state;
};

export const getDropEffect = (state: ReducerState) => (
	state.dropEffect
);

export const getEffectAllowed = (state: ReducerState) => (
	state.effectAllowed
);
