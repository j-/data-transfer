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
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={'clipboardData' in ClipboardEvent.prototype} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'dataTransfer' in DragEvent.prototype" />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={'dataTransfer' in DragEvent.prototype} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'DataTransferItem' in window" />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={'DataTransferItem' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'DataTransferItemList' in window" />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={'DataTransferItemList' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'ClipboardItem' in window" />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={'ClipboardItem' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'ondrop' in window" />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={'ondrop' in window} />
      </ConsoleGroupInline>
      <ConsoleGroupInline>
        <ConsoleInput input="'onpaste' in document" />
        <span className="text-muted align-top">&#x27f9;</span>
        <ConsoleOutput output={'onpaste' in document} />
      </ConsoleGroupInline>
      {'DataTransfer' in window && (
        <>
          <ConsoleGroupInline>
            <ConsoleInput input="'types' in DataTransfer.prototype" />
            <span className="text-muted align-top">&#x27f9;</span>
            <ConsoleOutput output={'types' in DataTransfer.prototype} />
          </ConsoleGroupInline>
          <ConsoleGroupInline>
            <ConsoleInput input="'items' in DataTransfer.prototype" />
            <span className="text-muted align-top">&#x27f9;</span>
            <ConsoleOutput output={'items' in DataTransfer.prototype} />
          </ConsoleGroupInline>
          <ConsoleGroupInline>
            <ConsoleInput input="'files' in DataTransfer.prototype" />
            <span className="text-muted align-top">&#x27f9;</span>
            <ConsoleOutput output={'files' in DataTransfer.prototype} />
          </ConsoleGroupInline>
        </>
      )}
      {'DataTransferItem' in window && (
        <>
          <ConsoleGroupInline>
            <ConsoleInput input="'getAsFileSystemHandle' in DataTransferItem.prototype" />
            <span className="text-muted align-top">&#x27f9;</span>
            <ConsoleOutput output={'getAsFileSystemHandle' in DataTransferItem.prototype} />
          </ConsoleGroupInline>
          <ConsoleGroupInline>
            <ConsoleInput input="'webkitGetAsEntry' in DataTransferItem.prototype" />
            <span className="text-muted align-top">&#x27f9;</span>
            <ConsoleOutput output={'webkitGetAsEntry' in DataTransferItem.prototype} />
          </ConsoleGroupInline>
        </>
      )}
    </Report>
  );
}

export default Support;
