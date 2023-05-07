import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
import ConsoleGroupMultiline from './ConsoleGroupMultiline';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';
import { getFilesFromEntry } from './get-files-from-entry';
import Report from './Report';

type Props = {
  path: string;
  index: number;
  item: DataTransferItem;
};

const ReportItemEntry: React.FC<Props> = ({ path, item }) => (
  <Report>
    <br />
    <ConsoleGroupInline>
      <ConsoleInput input={`typeof ${path}.webkitGetAsEntry`} />
      <span className="text-muted">&#x27f9;</span>
      <ConsoleOutput output={typeof item.webkitGetAsEntry} />
    </ConsoleGroupInline>
    {typeof item.webkitGetAsEntry === 'function' && window.isSecureContext && (
      (() => {
        const entry = item.webkitGetAsEntry();
        if (entry == null) {
          return (
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry()`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={entry} />
            </ConsoleGroupInline>
          );
        }
        return (
          <>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry()`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={entry} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().isFile`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={entry.isFile} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().isDirectory`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={entry.isDirectory} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().name`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={entry.name} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().fullPath`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={entry.fullPath} />
            </ConsoleGroupInline>
            <ConsoleGroupMultiline>
              <ConsoleInput input={`getFilesFromEntry(${path}.webkitGetAsEntry())`} />
              <ConsoleOutput output={Promise.resolve().then(() => getFilesFromEntry(entry)).then((files) => files.map((file) => file.name))} />
            </ConsoleGroupMultiline>
          </>
        );
      })()
    )}
  </Report>
);

export default ReportItemEntry;
