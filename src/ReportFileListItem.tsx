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
  <Report key={`ReportFileListItem-${index}`}>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.lastModified`} />
      <span className="text-muted align-top">&#x27f9;</span>
      <ConsoleOutput output={file.lastModified} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.name`} />
      <span className="text-muted align-top">&#x27f9;</span>
      <ConsoleOutput output={file.name} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.webkitRelativePath`} />
      <span className="text-muted align-top">&#x27f9;</span>
      <ConsoleOutput output={file.webkitRelativePath} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.size`} />
      <span className="text-muted align-top">&#x27f9;</span>
      <ConsoleOutput output={file.size} />
    </ConsoleGroupInline>
    <ConsoleGroupInline>
      <ConsoleInput input={`${path}.type`} />
      <span className="text-muted align-top">&#x27f9;</span>
      <ConsoleOutput output={file.type} />
    </ConsoleGroupInline>
  </Report>
);

export default ReportFileListItem;
