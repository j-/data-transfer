import { Action } from 'redux';
import { isActionTransferData } from './actions';

export type ReducerState = string[];

const DEFAULT_STATE: ReducerState = [];

export default (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState => {
	if (isActionTransferData(action)) {
		return [...action.payload.dataTransfer.types];
	}

	return state;
};

export const getTypes = (state: ReducerState): string[] => (
	state
);

export const hasType = (state: ReducerState, type: string): boolean => (
	state.indexOf(type) > -1
);
