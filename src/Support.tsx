import Report from './Report';
import DefinitionPairInline from './DefinitionPairInline';

const Support: React.FC = () => {
  return (
    <Report>
      <DefinitionPairInline label="'clipboardData' in ClipboardEvent.prototype" value={'clipboardData' in ClipboardEvent.prototype} />
      <DefinitionPairInline label="'dataTransfer' in DragEvent.prototype" value={'dataTransfer' in DragEvent.prototype} />
      <DefinitionPairInline label="'DataTransferItem' in window" value={'DataTransferItem' in window} />
      <DefinitionPairInline label="'DataTransferItemList' in window" value={'DataTransferItemList' in window} />
      <DefinitionPairInline label="'ClipboardItem' in window" value={'ClipboardItem' in window} />
      <DefinitionPairInline label="'ondrop' in window" value={'ondrop' in window} />
      <DefinitionPairInline label="'onpaste' in document" value={'onpaste' in document} />
      {'DataTransfer' in window && (
        <>
          <DefinitionPairInline label="'types' in DataTransfer.prototype" value={'types' in DataTransfer.prototype} />
          <DefinitionPairInline label="'items' in DataTransfer.prototype" value={'items' in DataTransfer.prototype} />
          <DefinitionPairInline label="'files' in DataTransfer.prototype" value={'files' in DataTransfer.prototype} />
        </>
      )}
      {'DataTransferItem' in window && (
        <>
          <DefinitionPairInline label="'getAsFileSystemHandle' in DataTransferItem.prototype" value={'getAsFileSystemHandle' in DataTransferItem.prototype} />
          <DefinitionPairInline label="'webkitGetAsEntry' in DataTransferItem.prototype" value={'webkitGetAsEntry' in DataTransferItem.prototype} />
        </>
      )}
    </Report>
  );
}

export default Support;
