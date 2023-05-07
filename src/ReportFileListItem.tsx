import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
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
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.lastModified`} />
      <ConsoleOutput output={file.lastModified} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.name`} />
      <ConsoleOutput output={file.name} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.webkitRelativePath`} />
      <ConsoleOutput output={file.webkitRelativePath} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.size`} />
      <ConsoleOutput output={file.size} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.type`} />
      <ConsoleOutput output={file.type} />
    </ConsoleGroupInline>
  </Report>
);

export default ReportFileListItem;
