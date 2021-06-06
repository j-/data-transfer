import React from 'react';
import ConsoleGroup from './ConsoleGroup';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput, { ConsoleOutputType } from './ConsoleOutput';
import ReportFileList from './ReportFileList';
import ReportItemHandle from './ReportItemHandle';
import ReportItemEntry from './ReportItemEntry';

const getAsString = (item: DataTransferItem) => (
  new Promise((resolve) => {
    item.getAsString((result) => resolve(result));
  })
);

const hellip = '\u2026';

export const generateDataTransferReport = (path: string, dt: DataTransfer, isSafe = false): React.ReactChild => {
  const children: React.ReactChild[] = [];

  if (isSafe) {
    console.dir(dt);
  }

  const push = (input: string, output: ConsoleOutputType, type?: string): void => {
    children.push(
      <ConsoleGroup key={`${input}-${output}`}>
        <ConsoleInput input={input} />
        <ConsoleOutput output={output} type={type} />
      </ConsoleGroup>
    );
  };

  const flush = (): React.ReactChild => {
    return <>{children}</>;
  };

  push(`${path}.dropEffect`, dt.dropEffect);
  push(`${path}.effectAllowed`, dt.effectAllowed);
  push(`${path}.types`, dt.types);

  children.push(<h3 key="dt-items" className="my-5">Items</h3>);

  if (dt.items) {
    push(`${path}.items`, dt.items);
    push(`${path}.items.length`, dt.items.length);

    for (let i = 0; i < dt.items.length; i++) {
      children.push(<h4 key={`dt-item-${i}`} className="h3 my-5">Items &mdash; Item {i}</h4>);

      const item = dt.items[i];
      const subpath = `${path}.items[${i}]`;
      push(`${subpath}.kind`, item.kind);
      push(`${subpath}.type`, item.type);
      if (item.kind === 'string') {
        push(
          `${path}.getData(${JSON.stringify(item.type)})`,
          dt.getData(item.type),
          item.type
        );
        if (isSafe) {
          push(
            `${subpath}.getAsString()${hellip}`,
            getAsString(item),
            item.type
          );
        }
      } else {
        children.push(
          <ReportItemHandle
            key={`report-item-${i}-handle`}
            path={subpath}
            index={i}
            item={item}
          />
        );
        children.push(
          <ReportItemEntry
            key={`report-item-${i}-entry`}
            path={subpath}
            index={i}
            item={item}
          />
        );
      }
    }
  }

  children.push(<ReportFileList key="report-file-list" path={`${path}.files`} files={dt.files} />);

  return flush();
};
