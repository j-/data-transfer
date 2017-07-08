import * as React from 'react';
import './Data.css';

export interface Props {
	type: string;
	data: string;
}

const Empty = () => (
	<em className="Data-empty">
		Empty
	</em>
);

export default class Data extends React.Component<Props> {
	render () {
		const { type, data } = this.props;
		return (
			<div className="Data">
				<div className="Data-type">{type}</div>
				<div className="Data-data">{data || <Empty />}</div>
			</div>
		);
	}
}
