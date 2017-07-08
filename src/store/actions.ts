import { Action } from 'redux';

export interface ActionTransferData extends Action {
	type: 'TRANSFER_DATA';
	payload: {
		dataTransfer: DataTransfer;
	};
}

export const isActionTransferData = (action: Action): action is ActionTransferData => (
	action.type === 'TRANSFER_DATA'
);

export const transferData = (dataTransfer: DataTransfer) => ({
	type: 'TRANSFER_DATA',
	payload: {
		dataTransfer,
	},
});
