import React from 'react';
import DefinitionPairInline from './DefinitionPairInline';
import Report from './Report';

type Props = {
  path: string;
  index: number;
  file: File;
};

const ReportFileListItem: React.FC<Props> = ({ path, index, file }) => (
  <Report key={`ReportFileListItem-${index}`}>
    <DefinitionPairInline label={`${path}.lastModified`} value={file.lastModified} />
    <DefinitionPairInline label={`${path}.name`} value={file.name} />
    <DefinitionPairInline label={`${path}.webkitRelativePath`} value={file.webkitRelativePath} />
    <DefinitionPairInline label={`${path}.size`} value={file.size} />
    <DefinitionPairInline label={`${path}.type`} value={file.type} />
  </Report>
);

export default ReportFileListItem;
