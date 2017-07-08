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
			<div className="Effects">
				<div className="Effects-effect">
					<div className="Effects-label">
						dropEffect
					</div>
					<div className="Effects-value">
						{this.props.dropEffect}
					</div>
				</div>
				<div className="Effects-effect">
					<div className="Effects-label">
						effectAllowed
					</div>
					<div className="Effects-value">
						{this.props.effectAllowed}
					</div>
				</div>
			</div>
		);
	}
}
