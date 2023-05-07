import React from 'react';
import ConsoleGroupInline from './ConsoleGroupInline';
import ConsoleInput from './ConsoleInput';
import ConsoleOutput from './ConsoleOutput';
import Report from './Report';

type Props = {
  path: string;
  index: number;
  item: DataTransferItem;
};

const hellip = '\u2026';

const ReportItemHandle: React.FC<Props> = ({ path, index, item }) => (
  <Report key={`ReportItemHandle-${index}`}>
    <br />
    <ConsoleGroupInline>
      <ConsoleInput input={`typeof ${path}.getAsFileSystemHandle`} />
      <span className="text-muted">&#x27f9;</span>
      <ConsoleOutput output={typeof item.getAsFileSystemHandle} />
    </ConsoleGroupInline>
    {typeof item.getAsFileSystemHandle === 'function' && window.isSecureContext && (
      (() => {
        const handle = item.getAsFileSystemHandle();
        return (
          <React.Fragment key={`ReportItemHandle-${index}-handle`}>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.getAsFileSystemHandle()${hellip}`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={handle} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.getAsFileSystemHandle()${hellip}.kind`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={handle.then((entry) => entry.kind)} />
            </ConsoleGroupInline>
            <ConsoleGroupInline>
              <ConsoleInput input={`${path}.getAsFileSystemHandle()${hellip}.name`} />
              <span className="text-muted">&#x27f9;</span>
              <ConsoleOutput output={handle.then((entry) => entry.name)} />
            </ConsoleGroupInline>
          </React.Fragment>
        );
      })()
    )}
  </Report>
);

export default ReportItemHandle;
