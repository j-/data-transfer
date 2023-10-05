import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
import DefinitionPairMultiline from './DefinitionPairMultiline';
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
  <Report key={`ReportItemEntry-${index}`}>
    <br />
    <ConsoleGroupInline>
      <ConsoleInput input={`typeof ${path}.webkitGetAsEntry`} />
      <ConsoleOutput output={typeof item.webkitGetAsEntry} />
    </ConsoleGroupInline>
    {typeof item.webkitGetAsEntry === 'function' && window.isSecureContext && (
      (() => {
        const entry = item.webkitGetAsEntry();
        if (entry == null) {
          return (
            <ConsoleGroupInline key={`ReportItemEntry-${index}-entry-nullish`}>
              <ConsoleInput input={`${path}.webkitGetAsEntry()`} />
              <ConsoleOutput output={entry} />
            </ConsoleGroupInline>
          );
        }
        return (
          <React.Fragment key={`ReportItemEntry-${index}-entry-nonnull`}>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.webkitGetAsEntry()`} />
              <ConsoleOutput output={entry} />
            </ConsoleGroupInline>
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
            <br />
            <DefinitionPairMultiline
              label={`getFilesFromEntry(${path}.webkitGetAsEntry())`}
              value={Promise.resolve().then(() => getFilesFromEntry(entry)).then((files) => files.map((file) => file.name))}
            />
          </React.Fragment>
        );
      })()
    )}
  </Report>
);

export default ReportItemEntry;
