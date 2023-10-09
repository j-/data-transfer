import React from 'react';
import DefinitionPairInline from './DefinitionPairInline';
import { isClipboardEvent, isDragEvent, isSafeEvent } from './is-event';
import { generateDataTransferReport } from './generate-data-transfer-report';

export const generateEventReport = (path: string, event: ClipboardEvent | DragEvent): React.ReactChild => {
  const children: React.ReactChild[] = [];
  const isSafe = isSafeEvent(event);

  if (isSafe) {
    console.dir(event);
  }

  const pushInline = (input: string, output: any): void => {
    children.push(
      <DefinitionPairInline
        key={`${input}-${output}`}
        label={input}
        value={output}
      />
    );
  };

  const flush = (): React.ReactChild => {
    return <>{children}</>;
  };

  children.push(<h3 key="basics" className="my-5 text-lg font-bold">Basics</h3>);

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

  children.push(generateDataTransferReport(subpath, event, dt, isSafe));

  return flush();
};
