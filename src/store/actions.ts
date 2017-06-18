import { Action } from 'redux';
import { StoredDataTransfer } from '../types';

const cloneDataTransfer = (dt: DataTransfer): StoredDataTransfer => {
	return {
		files: Array.from(dt.files, (file: File) => ({
			lastModifiedDate: file.lastModifiedDate,
			name: file.name,
			size: file.size,
			type: file.type,
		})),
		items: Array.from(dt.items, (item) => ({
			kind: item.kind,
			type: item.type,
			_data: dt.getData(item.type),
		})),
		types: Array.from(dt.types)
	};
};

export interface AddDataTransferAction extends Action {
	type: 'ADD_DATA_TRANSER';
	payload: StoredDataTransfer;
}

export const isAddDataTransferAction = (action: Action): action is AddDataTransferAction => (
	action.type === 'ADD_DATA_TRANSFER'
);

export const addDataTransfer = (dataTransfer: DataTransfer) => ({
	type: 'ADD_DATA_TRANSFER',
	payload: cloneDataTransfer(dataTransfer),
});
