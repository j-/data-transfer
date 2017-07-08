import * as React from 'react';
import './Data.css';

const copy = require('clipboard-copy');

export interface Props {
	type: string;
	data: string;
}

const Empty = () => (
	<em className="Data-empty">
		Empty
	</em>
);

const Copy = ({ data }: { data: string }) => (
	<button
		type="button"
		className="Data-copy"
		onClick={() => copy(data)}
	>
		(Copy)
	</button>
);

export default class Data extends React.Component<Props> {
	render () {
		const { type, data } = this.props;
		return (
			<div className="Data">
				<div className="Data-type">
					{data && <Copy data={data} />}
					{type}
				</div>
				<div className="Data-data">
					{data || <Empty />}
				</div>
			</div>
		);
	}
}
