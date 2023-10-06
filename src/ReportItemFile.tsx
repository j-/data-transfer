import React from 'react';
import DefinitionPairInline from './DefinitionPairInline';
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
    <DefinitionPairInline label={`typeof ${path}.getAsFile`} value={typeof item.getAsFile} />
    {typeof item.getAsFile === 'function' && window.isSecureContext && (
      (() => {
        const file = item.getAsFile();
        if (!file) {
          return (
            <DefinitionPairInline
              key={`ReportItemFile-${index}-file-nullish`}
              label={`${path}.getAsFile()`}
              value={file}
            />
          );
        }
        return (
          <React.Fragment key={`ReportItemFile-${index}-file-nonnull`}>
            <DefinitionPairInline label={`${path}.getAsFile()`} value={file} />
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
