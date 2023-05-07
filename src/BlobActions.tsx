import React from 'react';

type Props = {
  type?: string;
  value: string;
};

const BlobActions: React.FC<Props> = ({ type, value }) => {
  const [objectURL, setObjectURL] = React.useState('');

  const blob = React.useMemo(() => {
    return new Blob([value], { type });
  }, [value, type]);

  const handleClickOpen = React.useCallback(() => {
    window.open(objectURL, '_blank');
  }, [objectURL]);

  const handleClickCopyPlain = React.useCallback(() => {
    navigator.clipboard.writeText(value);
  }, [value]);

  const handleClickCopyType = React.useCallback(() => {
    if (!type) return;
    navigator.clipboard.write(
      [new ClipboardItem({
        [type]: blob,
      })]
    );
  }, [blob, value, type]);

  React.useEffect(() => {
    const url = URL.createObjectURL(blob);
    setObjectURL(url);
    return () => URL.revokeObjectURL(url);
  }, [blob]);

  return (
    <div className="BlobActions d-flex gap-2">
      <button
        className="btn btn-light btn-sm"
        type="button"
        onClick={handleClickOpen}
      >
        Open in new tab
      </button>

      {type && <button
        className="btn btn-light btn-sm"
        type="button"
        onClick={handleClickCopyPlain}
      >
        Copy as plain text
      </button>}

      {type && <button
        className="btn btn-light btn-sm"
        type="button"
        onClick={handleClickCopyType}
      >
        Copy as {type}
      </button>}
    </div>
  );
};

export default BlobActions;
