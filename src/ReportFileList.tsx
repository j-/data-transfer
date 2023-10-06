import React from 'react';
import DefinitionPairInline from './DefinitionPairInline';
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
    <h3 key="files" className="h3 my-5 text-xl font-bold">Files</h3>
    <div>
      <DefinitionPairInline label={path} value={files} />
      <DefinitionPairInline label={`${path}.length`} value={files.length} />
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
