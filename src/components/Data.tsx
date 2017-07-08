import * as React from 'react';

export interface Props {
	type: string;
	data: string;
}

export default class Data extends React.Component<Props> {
	render () {
		return (
			<div>
				<strong>{this.props.type}</strong><br />
				<pre>{this.props.data}</pre>
			</div>
		);
	}
}
