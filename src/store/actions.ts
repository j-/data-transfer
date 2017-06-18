import { Action } from 'redux';
import { SimpleDataTransfer } from '../types';

export interface AddDataTransferAction extends Action {
	type: 'ADD_DATA_TRANSER';
	payload: SimpleDataTransfer;
}

export const isAddDataTransferAction = (action: Action): action is AddDataTransferAction => (
	action.type === 'ADD_DATA_TRANSFER'
);

export const addDataTransfer = (dataTransfer: SimpleDataTransfer) => ({
	type: 'ADD_DATA_TRANSFER',
	payload: dataTransfer,
});
