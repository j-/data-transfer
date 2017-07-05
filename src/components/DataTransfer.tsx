import * as React from 'react';
import { StoredDataTransfer } from '../types';

const replacer = (key: string, value: any) => { // tslint:disable-line
	if (key.charAt(0) === '_') {
		return undefined;
	}
	return value;
};

export interface Props {
	dataTransfer: StoredDataTransfer;
}

export default class DataTransfer extends React.Component<Props, void> {
	render () {
		const { dataTransfer } = this.props;
		return (
			<div className="DataTransfer">
				<pre>
					{JSON.stringify(dataTransfer, replacer, 2)}
				</pre>
			</div>
		);
	}
}
