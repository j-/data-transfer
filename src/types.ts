export interface SimpleDataTransfer {
	items: {
		kind: string;
		type: string;
	}[];
	types: string[];
	files: {
		lastModifiedDate: number;
		name: string;
		size: number;
		type: string;
	}[];
}
