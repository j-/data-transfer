import React from 'react';
import DefinitionPairInline from './DefinitionPairInline';
import Report from './Report';

type Props = {
  path: string;
  index: number;
  file: File;
};

const ReportFileListItem: React.FC<Props> = ({ path, index, file }) => {
  const [objectURL, setObjectURL] = React.useState('');

  const handleClickOpen = React.useCallback(() => {
    window.open(objectURL, '_blank');
  }, [objectURL]);

  React.useEffect(() => {
    const url = URL.createObjectURL(file);
    setObjectURL(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <Report key={`ReportFileListItem-${index}`}>
      <DefinitionPairInline label={`${path}.lastModified`} value={file.lastModified} />
      <DefinitionPairInline label={`${path}.name`} value={file.name} />
      <DefinitionPairInline label={`${path}.webkitRelativePath`} value={file.webkitRelativePath} />
      <DefinitionPairInline label={`${path}.size`} value={file.size} />
      <DefinitionPairInline label={`${path}.type`} value={file.type} />
      {file.type !== '' ? (
        <div className="ReportFileListItem-actions flex gap-2">
          <button
            className="btn btn-neutral btn-sm normal-case"
            type="button"
            onClick={handleClickOpen}
          >
            Open in new tab
          </button>
        </div>
      ) : null}
    </Report>
  );
};

export default ReportFileListItem;
