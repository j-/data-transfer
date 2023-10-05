import React from 'react';
import Report from './Report';
import ConsoleGroupInline from './ConsoleGroupInline';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';

const Support: React.FC = () => {
  return (
    <Report>
      <ConsoleGroupInline>
        <ConsoleInput input="'clipboardData' in ClipboardEvent.prototype" />
        <ConsoleOutput output={'clipboardData' in ClipboardEvent.prototype} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'dataTransfer' in DragEvent.prototype" />
        <ConsoleOutput output={'dataTransfer' in DragEvent.prototype} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'DataTransferItem' in window" />
        <ConsoleOutput output={'DataTransferItem' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'DataTransferItemList' in window" />
        <ConsoleOutput output={'DataTransferItemList' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'ClipboardItem' in window" />
        <ConsoleOutput output={'ClipboardItem' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'ondrop' in window" />
        <ConsoleOutput output={'ondrop' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'onpaste' in document" />
        <ConsoleOutput output={'onpaste' in document} />
      </ConsoleGroupInline>
      {'DataTransfer' in window && (
        <>
          <ConsoleGroupInline>
            <ConsoleInput input="'types' in DataTransfer.prototype" />
            <ConsoleOutput output={'types' in DataTransfer.prototype} />
          </ConsoleGroupInline>
          <ConsoleGroupInline>
            <ConsoleInput input="'items' in DataTransfer.prototype" />
            <ConsoleOutput output={'items' in DataTransfer.prototype} />
          </ConsoleGroupInline>
          <ConsoleGroupInline>
            <ConsoleInput input="'files' in DataTransfer.prototype" />
            <ConsoleOutput output={'files' in DataTransfer.prototype} />
          </ConsoleGroupInline>
        </>
      )}
      {'DataTransferItem' in window && (
        <>
          <ConsoleGroupInline>
            <ConsoleInput input="'getAsFileSystemHandle' in DataTransferItem.prototype" />
            <ConsoleOutput output={'getAsFileSystemHandle' in DataTransferItem.prototype} />
          </ConsoleGroupInline>
          <ConsoleGroupInline>
            <ConsoleInput input="'webkitGetAsEntry' in DataTransferItem.prototype" />
            <ConsoleOutput output={'webkitGetAsEntry' in DataTransferItem.prototype} />
          </ConsoleGroupInline>
        </>
      )}
    </Report>
  );
}

export default Support;
