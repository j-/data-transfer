import * as React from 'react';
import { Button } from '@blueprintjs/core';
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
	<Button
		className="Data-button pt-minimal"
		iconName="clipboard"
		title="Copy this data to clipboard"
		onClick={() => copy(data)}
	>
		Copy data to clipboard
	</Button>
);

const Open = ({ data, type }: { data: string, type: string }) => (
	<Button
		className="Data-button pt-minimal"
		iconName="document-open"
		title="Open this data in a new tab"
		onClick={() => open(type, data)}
	>
		Open in new tab
	</Button>
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
