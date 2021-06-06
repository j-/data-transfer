import React from 'react';
import ConsoleGroup from './ConsoleGroup';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';
import Report from './Report';

type Props = {
  path: string;
  index: number;
  file: File;
};

const ReportFileListItem: React.FC<Props> = ({ path, index, file }) => (
  <Report>
    <h4 className="h3 my-5">Files &mdash; File {index}</h4>
    <ConsoleGroup>
      <ConsoleInput input={`${path}.lastModified`} />
      <ConsoleOutput output={file.lastModified} />
    </ConsoleGroup>
    <ConsoleGroup>
      <ConsoleInput input={`${path}.name`} />
      <ConsoleOutput output={file.name} />
    </ConsoleGroup>
    <ConsoleGroup>
      <ConsoleInput input={`${path}.webkitRelativePath`} />
      <ConsoleOutput output={file.webkitRelativePath} />
    </ConsoleGroup>
    <ConsoleGroup>
      <ConsoleInput input={`${path}.size`} />
      <ConsoleOutput output={file.size} />
    </ConsoleGroup>
    <ConsoleGroup>
      <ConsoleInput input={`${path}.type`} />
      <ConsoleOutput output={file.type} />
    </ConsoleGroup>
  </Report>
);

export default ReportFileListItem;
