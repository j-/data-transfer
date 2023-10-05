import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';
import Report from './Report';
import ReportFileListItem from './ReportFileListItem';
import OrderedList from './OrderedList';
import ListItem from './ListItem';

type Props = {
  path: string;
  files: FileList;
};

const ReportFileList: React.FC<Props> = ({ path, files }) => (
  <Report key='ReportFileList'>
    <h3 key="files" className="h3 my-5">Files</h3>
    <div>
      <ConsoleGroupInline>
        <ConsoleInput input={path} />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={files} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input={`${path}.length`} />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={files.length} />
      </ConsoleGroupInline>
    </div>
    <OrderedList>
      {Array.from(files, (file, i) => (
        <ListItem key={`report-file-list-item-${i}`} value={i}>
          <ReportFileListItem
            key={`report-file-list-item-${i}`}
            path={`${path}[${i}]`}
            index={i}
            file={file}
          />
        </ListItem>
      ))}
    </OrderedList>
  </Report>
);

export default ReportFileList;
