import React from 'react';
import ConsoleGroup from './ConsoleGroup';
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
  <Report>
    <h5 className="h3 my-5">Items &mdash; Item {index} &mdash; Handle</h5>
    <ConsoleGroup>
      <ConsoleInput input={`typeof ${path}.getAsFileSystemHandle`} />
      <ConsoleOutput output={typeof item.getAsFileSystemHandle} />
    </ConsoleGroup>
    {typeof item.getAsFileSystemHandle === 'function' && window.isSecureContext && (
      (() => {
        const handle = item.getAsFileSystemHandle();
        return (
          <>
            <ConsoleGroup>
              <ConsoleInput input={`${path}.getAsFileSystemHandle()`} />
              <ConsoleOutput output={handle} />
            </ConsoleGroup>
            <ConsoleGroup>
              <ConsoleInput input={`${path}.getAsFileSystemHandle()${hellip}.kind`} />
              <ConsoleOutput output={handle.then((entry) => entry.kind)} />
            </ConsoleGroup>
            <ConsoleGroup>
              <ConsoleInput input={`${path}.getAsFileSystemHandle()${hellip}.name`} />
              <ConsoleOutput output={handle.then((entry) => entry.name)} />
            </ConsoleGroup>
          </>
        );
      })()
    )}
  </Report>
);

export default ReportItemHandle;
