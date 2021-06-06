import React from 'react';
import ConsoleGroup from './ConsoleGroup';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';
import Report from './Report';
import ReportFileListItem from './ReportFileListItem';

type Props = {
  path: string;
  files: FileList;
};

const ReportFileList: React.FC<Props> = ({ path, files }) => (
  <Report>
    <h3 key="files" className="h3 my-5">Files</h3>
    <div>
      <ConsoleGroup>
        <ConsoleInput input={path} />
        <ConsoleOutput output={files} />
      </ConsoleGroup>
      <ConsoleGroup>
        <ConsoleInput input={`${path}.length`} />
        <ConsoleOutput output={files.length} />
      </ConsoleGroup>
    </div>
    {Array.from(files, (file, i) => (
      <ReportFileListItem
        key={`report-file-list-item-${i}`}
        path={`${path}[${i}]`}
        index={i}
        file={file}
      />
    ))}
  </Report>
);

export default ReportFileList;
