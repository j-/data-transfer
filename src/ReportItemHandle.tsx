import { Fragment } from 'react';
import DefinitionPairInline from './DefinitionPairInline';
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
    <DefinitionPairInline label={`typeof ${path}.getAsFileSystemHandle`} value={typeof item.getAsFileSystemHandle} />
    {typeof item.getAsFileSystemHandle === 'function' && window.isSecureContext && (
      (() => {
        const handle = item.getAsFileSystemHandle();
        return (
          <Fragment key={`ReportItemHandle-${index}-handle`}>
            <DefinitionPairInline label={`${path}.getAsFileSystemHandle()${hellip}`} value={handle} />
            <DefinitionPairInline label={`${path}.getAsFileSystemHandle()${hellip}.kind`} value={handle.then((entry) => entry?.kind)} />
            <DefinitionPairInline label={`${path}.getAsFileSystemHandle()${hellip}.name`} value={handle.then((entry) => entry?.name)} />
          </Fragment>
        );
      })()
    )}
  </Report>
);

export default ReportItemHandle;
