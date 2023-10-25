import Report from './Report';
import { isEvent } from './is-event';
import { generateEventReport } from './generate-event-report';
import { generateDataTransferReport } from './generate-data-transfer-report';

export const generateReport = (item: ClipboardEvent | DragEvent | DataTransfer): React.ReactChild => {
  if (isEvent(item)) {
    return <Report key="generate-report-event-report">{generateEventReport('event', item)}</Report>;
  } else {
    return <Report key="generate-report-data-transfer-report">{generateDataTransferReport('dt', null, item, true)}</Report>;
  }
};
