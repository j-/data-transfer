import { Action } from 'redux';
import { SimpleDataTransfer } from '../types';
import { isAddDataTransferAction } from './actions';

export type ReducerState = SimpleDataTransfer[];

const DEFAULT_STATE: ReducerState = [];

export default (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState => {
	if (isAddDataTransferAction(action)) {
		return [
			...state,
			action.payload,
		];
	}

	return state;
};

export const getDataTransfers = (state: ReducerState): SimpleDataTransfer[] => (
	state
);
