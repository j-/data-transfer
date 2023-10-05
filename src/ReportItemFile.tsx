import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';
import Report from './Report';
import ReportFileListItem from './ReportFileListItem';

type Props = {
  path: string;
  index: number;
  item: DataTransferItem;
};

const ReportItemFile: React.FC<Props> = ({ path, index, item }) => (
  <Report key={`ReportItemFile-${index}`}>
    <br />
    <ConsoleGroupInline>
      <ConsoleInput input={`typeof ${path}.getAsFile`} />
      <ConsoleOutput output={typeof item.getAsFile} />
    </ConsoleGroupInline>
    {typeof item.getAsFile === 'function' && window.isSecureContext && (
      (() => {
        const file = item.getAsFile();
        if (!file) {
          return (
            <ConsoleGroupInline key={`ReportItemFile-${index}-file-nullish`}>
              <ConsoleInput input={`${path}.getAsFile()`} />
              <ConsoleOutput output={file} />
            </ConsoleGroupInline>
          );
        }
        return (
          <React.Fragment key={`ReportItemFile-${index}-file-nonnull`}>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.getAsFile()`} />
              <ConsoleOutput output={file} />
            </ConsoleGroupInline>
            <ReportFileListItem
              key={`report-item-list-item-${index}-file`}
              path={`${path}.getAsFile()`}
              index={index}
              file={file}
            />
          </React.Fragment>
        );
      })()
    )}
  </Report>
);

export default ReportItemFile;
