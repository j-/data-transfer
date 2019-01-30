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
			<table className="Effects table table-bordered">
				<thead>
					<tr>
						<th>Effect name</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr className="Effects-effect">
						<td className="Effects-label">
							<a
								href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect"
								title="none, copy, link or move"
							>
								dropEffect
							</a>
						</td>
						<td className="Effects-value">
							{this.props.dropEffect}
						</td>
					</tr>
					<tr className="Effects-effect">
						<td className="Effects-label">
							<a
								href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed"
								title="none, copy, copyLink, copyMove, link, linkMove, move, all or uninitialized"
							>
								effectAllowed
							</a>
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
