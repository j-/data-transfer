import * as React from 'react';
import { Observable, Subscription } from 'rxjs';

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

}

export default class DataTransfers extends React.Component<Props, void> {
	private dragAndDropEventsSubscription: Subscription;
	private dataTransfersSubscription: Subscription;

	componentDidMount () {
		this.dragAndDropEventsSubscription = dragAndDropEvents
			.subscribe((e) => e.preventDefault());
		this.dataTransfersSubscription = dataTransfers
			.subscribe((dt) => console.log(dt));
	}

	componentWillUnmount () {
		this.dragAndDropEventsSubscription.unsubscribe();
		this.dataTransfersSubscription.unsubscribe();
	}

	render () {
		return (
			<div />
		);
	}
}
