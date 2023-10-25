import { Fragment } from 'react';
import DefinitionPairInline from './DefinitionPairInline';
import { getFilesFromEntry } from './get-files-from-entry';
import Report from './Report';

type Props = {
  path: string;
  index: number;
  item: DataTransferItem;
};

const ReportItemEntry: React.FC<Props> = ({ path, index, item }) => (
  <Report key={`ReportItemEntry-${index}`}>
    <br />
    <DefinitionPairInline label={`typeof ${path}.webkitGetAsEntry`} value={typeof item.webkitGetAsEntry} />
    {typeof item.webkitGetAsEntry === 'function' && window.isSecureContext && (
      (() => {
        const entry = item.webkitGetAsEntry();
        if (entry == null) {
          return (
            <DefinitionPairInline
              key={`ReportItemEntry-${index}-entry-nullish`}
              label={`${path}.webkitGetAsEntry()`}
              value={entry}
            />
          );
        }
        return (
          <Fragment key={`ReportItemEntry-${index}-entry-nonnull`}>
            <DefinitionPairInline label={`${path}.webkitGetAsEntry()`} value={entry} />
            <DefinitionPairInline label={`${path}.webkitGetAsEntry().isFile`} value={entry.isFile} />
            <DefinitionPairInline label={`${path}.webkitGetAsEntry().isDirectory`} value={entry.isDirectory} />
            <DefinitionPairInline label={`${path}.webkitGetAsEntry().name`} value={entry.name} />
            <DefinitionPairInline label={`${path}.webkitGetAsEntry().fullPath`} value={entry.fullPath} />
            <br />
            <DefinitionPairInline
              label={`getFilesFromEntry(${path}.webkitGetAsEntry())`}
              value={Promise.resolve().then(() => getFilesFromEntry(entry)).then((files) => files.map((file) => file.name))}
            />
          </Fragment>
        );
      })()
    )}
  </Report>
);

export default ReportItemEntry;
