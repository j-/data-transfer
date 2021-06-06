import React from 'react';
import ConsoleGroup from './ConsoleGroup';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput, { ConsoleOutputType } from './ConsoleOutput';
import { isClipboardEvent, isDragEvent, isSafeEvent } from './is-event';
import { generateDataTransferReport } from './generate-data-transfer-report';

export const generateEventReport = (path: string, event: ClipboardEvent | DragEvent): React.ReactChild => {
  const children: React.ReactChild[] = [];
  const isSafe = isSafeEvent(event);

  if (isSafe) {
    console.dir(event);
  }

  const push = (input: string, output: ConsoleOutputType): void => {
    children.push(
      <ConsoleGroup key={`${input}-${output}`}>
        <ConsoleInput input={input} />
        <ConsoleOutput output={output} />
      </ConsoleGroup>
    );
  };

  const flush = (): React.ReactChild => {
    return <>{children}</>;
  };

  children.push(<h3 key="basics" className="my-5">Basics</h3>);

  push(`${path}.type`, event.type);
  push(`${path}.timeStamp`, event.timeStamp);

  let dt: DataTransfer;
  let subpath: string;

  if (isDragEvent(event)) {
    push(`${path}.dataTransfer`, event.dataTransfer);
    push(`${path}.clipboardData`, (event as any).clipboardData);
    if (event.dataTransfer == null) {
      return flush();
    }
    dt = event.dataTransfer;
    subpath = `${path}.dataTransfer`;
  } else if (isClipboardEvent(event)) {
    push(`${path}.clipboardData`, event.clipboardData);
    push(`${path}.dataTransfer`, (event as any).dataTransfer);
    if (event.clipboardData == null) {
      return flush();
    }
    dt = event.clipboardData;
    subpath = `${path}.clipboardData`;
  } else {
    return flush();
  }

  children.push(generateDataTransferReport(subpath, dt, isSafe));

  return flush();
};
