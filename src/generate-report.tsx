import React from 'react';
import Report from './Report';
import ConsoleGroup from './ConsoleGroup';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput, { ConsoleOutputType } from './ConsoleOutput';
import flatten from 'lodash.flatten';

const isEvent = (item: any): item is Event => (
  item instanceof Event
);

const isDragEvent = (event: Event): event is DragEvent => (
  event.type === 'drag' ||
  event.type === 'dragend' ||
  event.type === 'dragenter' ||
  event.type === 'dragexit' ||
  event.type === 'dragleave' ||
  event.type === 'dragover' ||
  event.type === 'dragstart' ||
  event.type === 'drop'
);

const isClipboardEvent = (event: Event): event is ClipboardEvent => (
  event.type === 'copy' ||
  event.type === 'cut' ||
  event.type === 'paste'
);

const isSafeEvent = (event: Event): boolean => (
  event.type === 'drop' ||
  event.type === 'paste'
);

const getAsString = (item: DataTransferItem) => (
  new Promise((resolve) => {
    item.getAsString((result) => resolve(result));
  })
);

const getFilesFromFileSystemFileEntry = async (entry: FileSystemFileEntry): Promise<File[]> => {
  const file = await new Promise<File>((resolve) => {
    entry.file(resolve);
  });
  return [file];
};

const getFilesFromFileSystemDirectoryEntry = async (entry: FileSystemDirectoryEntry): Promise<File[]> => {
  const reader = entry.createReader();
  const entries = await new Promise<(FileSystemFileEntry | FileSystemDirectoryEntry)[]>((resolve) => {
    reader.readEntries(resolve);
  });
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const entryFiles = await Promise.all(entries.map(getFilesFromEntry));
  return flatten(entryFiles);
};

const getFilesFromEntry = async (entry: FileSystemFileEntry | FileSystemDirectoryEntry): Promise<File[]> => {
  if (entry.isFile) {
    return getFilesFromFileSystemFileEntry(entry);
  } else if (entry.isDirectory) {
    return getFilesFromFileSystemDirectoryEntry(entry);
  } else {
    throw new Error('Expected entry to be file or directory');
  }
};

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

  children.push(<h3 className="my-5">Basics</h3>);

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

export const generateReport = (item: ClipboardEvent | DragEvent | DataTransfer): React.ReactChild => {
  if (isEvent(item)) {
    return <Report>{generateEventReport('event', item)}</Report>;
  } else {
    return <Report>{generateDataTransferReport('dt', item, true)}</Report>;
  }
};
