import * as React from 'react';
import { Observable, Subscription } from 'rxjs';
import Data from './Data';
import './DataTransfer.css';

const { fromEvent, merge } = Observable;

// Event streams
const pasteEvents = fromEvent<ClipboardEvent>(window, 'paste');
const dragEvents = fromEvent<DragEvent>(window, 'dragover');
const dragEnterEvents = fromEvent<DragEvent>(window, 'dragenter');
const dragExitEvents = fromEvent<DragEvent>(window, 'dragexit');
const dropEvents = fromEvent<DragEvent>(window, 'drop');
const dragAndDropEvents = merge(dragEvents, dropEvents);

// Get transfer data from events
const dropData = merge(dragEnterEvents, dragExitEvents, dropEvents).pluck<DragEvent, DataTransfer>('dataTransfer');
const pasteData = pasteEvents.pluck<ClipboardEvent, DataTransfer>('clipboardData');
const dataTransfers = merge(dropData, pasteData);

export interface Props {
	transferData: (dt: DataTransfer) => void;
	data: string[][];
}

export default class DataTransfer extends React.Component<Props> {
	private dragAndDropEventsSubscription: Subscription;
	private dataTransfersSubscription: Subscription;

	componentDidMount () {
		const { transferData } = this.props;
		this.dragAndDropEventsSubscription = dragAndDropEvents
			.subscribe((e) => e.preventDefault());
		this.dataTransfersSubscription = dataTransfers
			.subscribe((dt) => transferData(dt));
	}

	componentWillUnmount () {
		this.dragAndDropEventsSubscription.unsubscribe();
		this.dataTransfersSubscription.unsubscribe();
	}

	render () {
		const children = this.props.data.map(([type, data]) => (
			<li key={type} className="DataTransfer-list-item">
				<Data type={type} data={data} />
			</li>
		));
		return (
			<div className="DataTransfer">
				<ul className="DataTransfer-list">
					{children}
				</ul>
			</div>
		);
	}
}
