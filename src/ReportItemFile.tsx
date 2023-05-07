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
  <Report>
    <br />
    <ConsoleGroupInline>
      <ConsoleInput input={`typeof ${path}.getAsFile`} />
      <span className="text-muted">&#x27f9;</span>
      <ConsoleOutput output={typeof item.getAsFile} />
    </ConsoleGroupInline>
    {typeof item.getAsFile === 'function' && window.isSecureContext && (
      (() => {
        const file = item.getAsFile();
        if (!file) {
          return (
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.getAsFile()`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={file} />
            </ConsoleGroupInline>
          );
        }
        return (
          <>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.getAsFile()`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={file} />
            </ConsoleGroupInline>
            <ReportFileListItem
              key={`report-item-list-item-${index}-file`}
              path={path}
              index={index}
              file={file}
            />
          </>
        );
      })()
    )}
  </Report>
);

export default ReportItemFile;
