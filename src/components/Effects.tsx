import * as React from 'react';
import { DropEffect, EffectAllowed } from '../types';
import './Effects.css';

export interface Props {
	dropEffect: DropEffect | null;
	effectAllowed: EffectAllowed | null;
}

export default class Effects extends React.Component<Props> {
	render () {
		return (
			<table className="Effects pt-table pt-bordered">
				<thead>
					<tr>
						<th>Effect name</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr className="Effects-effect">
						<td className="Effects-label">
							dropEffect
						</td>
						<td className="Effects-value">
							{this.props.dropEffect}
						</td>
					</tr>
					<tr className="Effects-effect">
						<td className="Effects-label">
							effectAllowed
						</td>
						<td className="Effects-value">
							{this.props.effectAllowed}
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
