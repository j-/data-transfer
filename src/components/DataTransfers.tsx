import * as React from 'react';
import { Observable, Subscription } from 'rxjs';
import { StoredDataTransfer } from '../types';
import DataTransfer from './DataTransfer';

const { fromEvent, merge } = Observable;

// Event streams
const pasteEvents = fromEvent<ClipboardEvent>(window, 'paste');
const dragEvents = fromEvent<DragEvent>(window, 'dragover');
const dropEvents = fromEvent<DragEvent>(window, 'drop');
const dragAndDropEvents = merge(dragEvents, dropEvents);

// Get transfer data from events
const dropData = dropEvents.pluck<DragEvent, DataTransfer>('dataTransfer');
const pasteData = pasteEvents.pluck<ClipboardEvent, DataTransfer>('clipboardData');
const dataTransfers = merge(dropData, pasteData);

export interface Props {
	addDataTransfer: (dt: DataTransfer) => void;
	dataTransfers: StoredDataTransfer[];
}

export default class DataTransfers extends React.Component<Props, void> {
	private dragAndDropEventsSubscription: Subscription;
	private dataTransfersSubscription: Subscription;

	componentDidMount () {
		const { addDataTransfer } = this.props;
		this.dragAndDropEventsSubscription = dragAndDropEvents
			.subscribe((e) => e.preventDefault());
		this.dataTransfersSubscription = dataTransfers
			.subscribe((dt) => addDataTransfer(dt));
	}

	componentWillUnmount () {
		this.dragAndDropEventsSubscription.unsubscribe();
		this.dataTransfersSubscription.unsubscribe();
	}

	render () {
		const { dataTransfers } = this.props;
		const children = dataTransfers.map((dt, i) => (
			<div className="DataTransfers-item" key={i}>
				<DataTransfer dataTransfer={dt} />
			</div>
		));
		return (
			<div className="DataTransfers">
				{children}
			</div>
		);
	}
}
