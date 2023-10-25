import { useCallback, useEffect, useMemo, useState } from 'react';

type Props = {
  type?: string;
  value: string;
};

const BlobActions: React.FC<Props> = ({ type, value }) => {
  const [objectURL, setObjectURL] = useState('');

  const blob = useMemo(() => {
    return new Blob([value], { type });
  }, [value, type]);

  const handleClickOpen = useCallback(() => {
    window.open(objectURL, '_blank');
  }, [objectURL]);

  const handleClickCopyPlain = useCallback(() => {
    navigator.clipboard.writeText(value);
  }, [value]);

  const handleClickCopyType = useCallback(() => {
    if (!type) return;
    navigator.clipboard.write(
      [new ClipboardItem({
        [type]: blob,
      })]
    );
  }, [blob, value, type]);

  useEffect(() => {
    const url = URL.createObjectURL(blob);
    setObjectURL(url);
    return () => URL.revokeObjectURL(url);
  }, [blob]);

  return (
    <div className="BlobActions flex gap-2">
      <button
        className="btn btn-neutral btn-sm normal-case"
        type="button"
        onClick={handleClickOpen}
      >
        Open in new tab
      </button>

      {type && <button
        className="btn btn-neutral btn-sm normal-case"
        type="button"
        onClick={handleClickCopyPlain}
      >
        Copy as plain text
      </button>}

      {type && type !== 'text/plain' && <button
        className="btn btn-neutral btn-sm normal-case"
        type="button"
        onClick={handleClickCopyType}
      >
        Copy as {type}
      </button>}
    </div>
  );
};

export default BlobActions;
