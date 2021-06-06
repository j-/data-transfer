import React from 'react';
import Report from './Report';
import ConsoleGroup from './ConsoleGroup';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';

const Support: React.FC = () => {
  return (
    <Report>
      <ConsoleGroup>
        <ConsoleInput input="'clipboardData' in ClipboardEvent.prototype" />
        <ConsoleOutput output={'clipboardData' in ClipboardEvent.prototype} />
      </ConsoleGroup>
      <ConsoleGroup>
        <ConsoleInput input="'dataTransfer' in DragEvent.prototype" />
        <ConsoleOutput output={'dataTransfer' in DragEvent.prototype} />
      </ConsoleGroup>
      <ConsoleGroup>
        <ConsoleInput input="'DataTransferItem' in window" />
        <ConsoleOutput output={'DataTransferItem' in window} />
      </ConsoleGroup>
      <ConsoleGroup>
        <ConsoleInput input="'DataTransferItemList' in window" />
        <ConsoleOutput output={'DataTransferItemList' in window} />
      </ConsoleGroup>
      <ConsoleGroup>
        <ConsoleInput input="'ClipboardItem' in window" />
        <ConsoleOutput output={'ClipboardItem' in window} />
      </ConsoleGroup>
      <ConsoleGroup>
        <ConsoleInput input="'ondrop' in window" />
        <ConsoleOutput output={'ondrop' in window} />
      </ConsoleGroup>
      <ConsoleGroup>
        <ConsoleInput input="'onpaste' in document" />
        <ConsoleOutput output={'onpaste' in document} />
      </ConsoleGroup>
      {'DataTransfer' in window && (
        <>
          <ConsoleGroup>
            <ConsoleInput input="'types' in DataTransfer.prototype" />
            <ConsoleOutput output={'types' in DataTransfer.prototype} />
          </ConsoleGroup>
          <ConsoleGroup>
            <ConsoleInput input="'items' in DataTransfer.prototype" />
            <ConsoleOutput output={'items' in DataTransfer.prototype} />
          </ConsoleGroup>
          <ConsoleGroup>
            <ConsoleInput input="'files' in DataTransfer.prototype" />
            <ConsoleOutput output={'files' in DataTransfer.prototype} />
          </ConsoleGroup>
        </>
      )}
      {'DataTransferItem' in window && (
        <>
          <ConsoleGroup>
            <ConsoleInput input="'getAsFileSystemHandle' in DataTransferItem.prototype" />
            <ConsoleOutput output={'getAsFileSystemHandle' in DataTransferItem.prototype} />
          </ConsoleGroup>
          <ConsoleGroup>
            <ConsoleInput input="'webkitGetAsEntry' in DataTransferItem.prototype" />
            <ConsoleOutput output={'webkitGetAsEntry' in DataTransferItem.prototype} />
          </ConsoleGroup>
        </>
      )}
    </Report>
  );
}

export default Support;
