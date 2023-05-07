import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput, { ConsoleOutputType } from './ConsoleOutput';
import ReportFileList from './ReportFileList';
import ReportItemHandle from './ReportItemHandle';
import ReportItemEntry from './ReportItemEntry';
import ConsoleGroupMultiline from './ConsoleGroupMultiline';
import ListItem from './ListItem';
import OrderedList from './OrderedList';
import ReportItemFile from './ReportItemFile';

export const generateDataTransferReport = (path: string, dt: DataTransfer, isSafe = false): React.ReactChild => {
  const children: React.ReactChild[] = [];

  if (isSafe) {
    console.dir(dt);
  }

  const pushInline = (children: React.ReactChild[], input: string, output: ConsoleOutputType, type?: string): void => {
    children.push(
      <ConsoleGroupInline key={`${input}-${output}`}>
        <ConsoleInput input={input} />
        <span className="text-muted">&#x27f9;</span>
        <ConsoleOutput output={output} type={type} />
      </ConsoleGroupInline>
    );
  };

  const pushMultiline = (children: React.ReactChild[], input: string, output: ConsoleOutputType, type?: string): void => {
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

  pushInline(children, `${path}.dropEffect`, dt.dropEffect);
  pushInline(children, `${path}.effectAllowed`, dt.effectAllowed);
  pushInline(children, `${path}.types`, dt.types);

  children.push(<h3 key="dt-items-heading" className="my-5">Items</h3>);

  if (dt.items) {
    pushInline(children, `${path}.items`, dt.items);
    pushInline(children, `${path}.items.length`, dt.items.length);

    const listItems: React.ReactChild[] = [];

    (() => {
      for (let i = 0; i < dt.items.length; i++) {
        const children: React.ReactChild[] = [];

        const item = dt.items[i];
        const subpath = `${path}.items[${i}]`;
        pushInline(children, `${subpath}.kind`, item.kind);
        pushInline(children, `${subpath}.type`, item.type);
        if (item.kind === 'string') {
          const label = `${path}.getData(${JSON.stringify(item.type)})`;
          const data = dt.getData(item.type);
          if (data === '') {
            pushInline(children, label, data, item.type);
          } else {
            pushMultiline(children, label, data, item.type);
          }
        } else {
          children.push(
            <ReportItemFile
              key={`report-item-${i}-file`}
              path={subpath}
              index={i}
              item={item}
            />
          );
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

        listItems.push(
          <ListItem key={`dt-item-${i}`} value={i}>
            {children}
          </ListItem>
        );
      }
    })();

    children.push(
      <OrderedList key="dt-items-list">
        {listItems}
      </OrderedList>
    );
  }

  children.push(<ReportFileList key="report-file-list" path={`${path}.files`} files={dt.files} />);

  return flush();
};
