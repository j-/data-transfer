import * as React from 'react';
import './Data.css';

const copy = require('clipboard-copy');

const open = (type: string, data: string) => (
	window.open(`data:${type},${data}`)
);

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
		className="Data-button"
		onClick={() => copy(data)}
	>
		(Copy)
	</button>
);

const Open = ({ data, type }: { data: string, type: string }) => (
	<button
		type="button"
		className="Data-button"
		onClick={() => open(type, data)}
	>
		(Open)
	</button>
);

export default class Data extends React.Component<Props> {
	render () {
		const { type, data } = this.props;
		return (
			<div className="Data">
				<div className="Data-item">
					<div className="Data-type">
						{type}
					</div>
					<div className="Data-data">
						{data || <Empty />}
					</div>
				</div>
				<div className="Data-buttons">
					{data && <Copy data={data} />}
					{data && <Open data={data} type={type} />}
				</div>
			</div>
		);
	}
}
