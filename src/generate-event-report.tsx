import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
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

  const pushInline = (input: string, output: ConsoleOutputType): void => {
    children.push(
      <ConsoleGroupInline key={`${input}-${output}`}>
        <ConsoleInput input={input} />
        <span className="text-muted">&#x27f9;</span>
        <ConsoleOutput output={output} />
      </ConsoleGroupInline>
    );
  };

  const flush = (): React.ReactChild => {
    return <>{children}</>;
  };

  children.push(<h3 key="basics" className="my-5">Basics</h3>);

  pushInline(`${path}.type`, event.type);
  pushInline(`${path}.timeStamp`, event.timeStamp);

  let dt: DataTransfer;
  let subpath: string;

  if (isDragEvent(event)) {
    pushInline(`${path}.dataTransfer`, event.dataTransfer);
    pushInline(`${path}.clipboardData`, (event as any).clipboardData);
    if (event.dataTransfer == null) {
      return flush();
    }
    dt = event.dataTransfer;
    subpath = `${path}.dataTransfer`;
  } else if (isClipboardEvent(event)) {
    pushInline(`${path}.clipboardData`, event.clipboardData);
    pushInline(`${path}.dataTransfer`, (event as any).dataTransfer);
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
