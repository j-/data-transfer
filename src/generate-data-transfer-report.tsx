import React from 'react';
import ConsoleGroup from './ConsoleGroup';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput, { ConsoleOutputType } from './ConsoleOutput';
import { getFilesFromEntry } from './get-files-from-entry';

const getAsString = (item: DataTransferItem) => (
  new Promise((resolve) => {
    item.getAsString((result) => resolve(result));
  })
);

const hellip = '\u2026';

export const generateDataTransferReport = (path: string, dt: DataTransfer, isSafe = false): React.ReactChild => {
  const children: React.ReactChild[] = [];
  const isSecure = window.isSecureContext;

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
  push(`${path}.items`, dt.items);

  children.push(<h3 className="my-5">Items</h3>);

  if (dt.items) {
    push(`${path}.items`, dt.items);
    push(`${path}.items.length`, dt.items.length);

    for (let i = 0; i < dt.items.length; i++) {
      children.push(<h4 className="my-5">Item {i}</h4>);

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
        children.push(<h5 className="my-4">Handle</h5>);
        push(
          `typeof ${subpath}.getAsFileSystemHandle`,
          typeof item.getAsFileSystemHandle
        );
        if (typeof item.getAsFileSystemHandle === 'function' && isSafe && isSecure) {
          const handle = item.getAsFileSystemHandle();
          push(
            `${subpath}.getAsFileSystemHandle()`,
            handle
          );
          push(
            `${subpath}.getAsFileSystemHandle()${hellip}.kind`,
            handle.then((entry) => entry.kind)
          );
          push(
            `${subpath}.getAsFileSystemHandle()${hellip}.name`,
            handle.then((entry) => entry.name)
          );
        }
        push(
          `typeof ${subpath}.webkitGetAsEntry`,
          typeof item.webkitGetAsEntry
        );
        if (typeof item.webkitGetAsEntry === 'function' && isSafe && isSecure) {
          const entry = item.webkitGetAsEntry();
          children.push(<h5 className="my-4">Entry</h5>);
          push(
            `${subpath}.webkitGetAsEntry()`,
            entry
          );
          if (entry != null) {
            push(
              `${subpath}.webkitGetAsEntry().isFile`,
              entry.isFile
            );
            push(
              `${subpath}.webkitGetAsEntry().isDirectory`,
              entry.isDirectory
            );
            push(
              `${subpath}.webkitGetAsEntry().name`,
              entry.name
            );
            push(
              `${subpath}.webkitGetAsEntry().fullPath`,
              entry.fullPath
            );
            push(
              `getFilesFromEntry(${subpath}.webkitGetAsEntry())`,
              Promise.resolve().then(() => getFilesFromEntry(entry)).then((files) => files.map((file) => file.name))
            );
          }
        }
      }
    }
  }

  children.push(<h3 className="my-5">Files</h3>);

  push(`${path}.files`, dt.files);

  if (dt.files) {
    push(`${path}.files.length`, dt.files.length);

    for (let i = 0; i < dt.files.length; i++) {
      children.push(<h4 className="my-5">File {i}</h4>);

      const file = dt.files[i];
      const subpath = `${path}.files[${i}]`;
      push(`${subpath}.lastModified`, file.lastModified);
      push(`${subpath}.name`, file.name);
      push(`${subpath}.webkitRelativePath`, file.webkitRelativePath);
      push(`${subpath}.size`, file.size);
      push(`${subpath}.type`, file.type);
    }
  }

  return flush();
};
