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
		className="Data-button btn btn-light"
		title="Copy this data to clipboard"
		onClick={() => copy(data)}
	>
		Copy data to clipboard
	</button>
);

export default class Data extends React.Component<Props> {
	render () {
		const { type, data } = this.props;
		return (
			<div className="Data">
				<div className="Data-item card">
					<div className="Data-type card-header">
						{type}
					</div>
					<div className="Data-data card-body">
						{data || <Empty />}
					</div>
				</div>
				<div className="Data-buttons">
					{data && <Copy data={data} />}
				</div>
			</div>
		);
	}
}
