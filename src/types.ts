export interface SimpleDataTransfer {
	items: {
		kind: string;
		type: string;
	}[];
	types: string[];
	files: {
		lastModified: number;
		name: string;
		size: number;
		type: string;
	}[];
}
