export interface StoredDataTransfer {
	items: {
		kind: string;
		type: string;
		_data?: any;
	}[];
	types: string[];
	files: {
		lastModifiedDate: number;
		name: string;
		size: number;
		type: string;
	}[];
}
