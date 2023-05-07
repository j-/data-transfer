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

  React.useEffect(() => {
    const url = URL.createObjectURL(blob);
    setObjectURL(url);
    return () => URL.revokeObjectURL(url);
  }, [blob]);

  return (
    <div className="BlobActions">
      <button
        className="btn btn-light btn-sm"
        type="button"
        onClick={handleClickOpen}
      >
        Open in new tab
      </button>
    </div>
  );
};

export default BlobActions;
