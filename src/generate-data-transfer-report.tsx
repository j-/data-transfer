import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput, { ConsoleOutputType } from './ConsoleOutput';
import ReportFileList from './ReportFileList';
import ReportItemHandle from './ReportItemHandle';
import ReportItemEntry from './ReportItemEntry';
import ConsoleGroupMultiline from './ConsoleGroupMultiline';

export const generateDataTransferReport = (path: string, dt: DataTransfer, isSafe = false): React.ReactChild => {
  const children: React.ReactChild[] = [];

  if (isSafe) {
    console.dir(dt);
  }

  const pushInline = (input: string, output: ConsoleOutputType, type?: string): void => {
    children.push(
      <ConsoleGroupInline key={`${input}-${output}`}>
        <ConsoleInput input={input} />
        <ConsoleOutput output={output} type={type} />
      </ConsoleGroupInline>
    );
  };

  const pushMultiline = (input: string, output: ConsoleOutputType, type?: string): void => {
    children.push(
      <ConsoleGroupMultiline key={`${input}-${output}`}>
        <ConsoleInput input={input} />
        <ConsoleOutput output={output} type={type} />
      </ConsoleGroupMultiline>
    );
  };

  const flush = (): React.ReactChild => {
    return <>{children}</>;
  };

  pushInline(`${path}.dropEffect`, dt.dropEffect);
  pushInline(`${path}.effectAllowed`, dt.effectAllowed);
  pushInline(`${path}.types`, dt.types);

  children.push(<h3 key="dt-items" className="my-5">Items</h3>);

  if (dt.items) {
    pushInline(`${path}.items`, dt.items);
    pushInline(`${path}.items.length`, dt.items.length);

    for (let i = 0; i < dt.items.length; i++) {
      children.push(<h4 key={`dt-item-${i}`} className="h3 my-5">Items &mdash; Item {i}</h4>);

      const item = dt.items[i];
      const subpath = `${path}.items[${i}]`;
      pushInline(`${subpath}.kind`, item.kind);
      pushInline(`${subpath}.type`, item.type);
      if (item.kind === 'string') {
        pushMultiline(
          `${path}.getData(${JSON.stringify(item.type)})`,
          dt.getData(item.type),
          item.type
        );
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
