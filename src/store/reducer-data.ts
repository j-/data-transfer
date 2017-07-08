import { Action } from 'redux';
import { isActionTransferData } from './actions';

export type ReducerState = string[][];

const DEFAULT_STATE: ReducerState = [];

export default (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState => {
	if (isActionTransferData(action)) {
		const { dataTransfer } = action.payload;
		return Array.from(dataTransfer.types, (type) => [
			type,
			dataTransfer.getData(type)
		]);
	}

	return state;
};

export const getData = (state: ReducerState): string[][] => (
	state
);
