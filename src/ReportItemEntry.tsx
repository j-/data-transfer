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

const ReportItemEntry: React.FC<Props> = ({ path, index, item }) => (
  <Report>
    <h5 className="h3 my-5">Items &mdash; Item {index}  &mdash; Entry</h5>
    <ConsoleGroupInline>
      <ConsoleInput input={`typeof ${path}.webkitGetAsEntry`} />
      <ConsoleOutput output={typeof item.webkitGetAsEntry} />
    </ConsoleGroupInline>
    {typeof item.webkitGetAsEntry === 'function' && window.isSecureContext && (
      (() => {
        const entry = item.webkitGetAsEntry();
        if (entry == null) {
          return (
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry()`} />
              <ConsoleOutput output={entry} />
            </ConsoleGroupInline>
          );
        }
        return (
          <>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().isFile`} />
              <ConsoleOutput output={entry.isFile} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().isDirectory`} />
              <ConsoleOutput output={entry.isDirectory} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().name`} />
              <ConsoleOutput output={entry.name} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry().fullPath`} />
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
