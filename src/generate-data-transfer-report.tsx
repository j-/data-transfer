import DefinitionPairInline from './DefinitionPairInline';
import ReportFileList from './ReportFileList';
import ReportItemHandle from './ReportItemHandle';
import ReportItemEntry from './ReportItemEntry';
import DefinitionPairMultiline from './DefinitionPairMultiline';
import ListItem from './ListItem';
import OrderedList from './OrderedList';
import ReportItemFile from './ReportItemFile';

const pushFile = true;
const pushHandle = true;
const pushEntry = true;

export const generateDataTransferReport = (path: string, event: Event | null, dt: DataTransfer, isSafe = false): React.ReactChild => {
  const children: React.ReactChild[] = [];

  if (isSafe) {
    console.dir(event, dt);
  }

  const pushInline = (children: React.ReactChild[], input: string, output: any): void => {
    children.push(
      <DefinitionPairInline
        key={`${input}-${output}`}
        label={input}
        value={output}
      />
    );
  };

  const pushMultiline = (children: React.ReactChild[], input: string, output: any, type?: string): void => {
    children.push(
      <DefinitionPairMultiline
        key={`${input}-${output}`}
        label={input}
        value={output}
        type={type}
      />
    );
  };

  const flush = (): React.ReactChild => {
    return <>{children}</>;
  };

  pushInline(children, `${path}.dropEffect`, dt.dropEffect);
  pushInline(children, `${path}.effectAllowed`, dt.effectAllowed);
  pushInline(children, `${path}.types`, dt.types);

  children.push(<h3 key="dt-items-heading" className="my-5 text-lg font-bold">Items</h3>);

  if (dt.items) {
    pushInline(children, `${path}.items`, dt.items);
    pushInline(children, `${path}.items.length`, dt.items.length);

    const listItems: React.ReactChild[] = [];

    (() => {
      for (let i = 0; i < dt.items.length; i++) {
        const children: React.ReactChild[] = [];

        const item = dt.items[i];
        const subpath = `${path}.items[${i}]`;
        pushInline(children, `${subpath}.kind`, item.kind);
        pushInline(children, `${subpath}.type`, item.type);
        if (item.kind === 'string') {
          const label = `${path}.getData(${JSON.stringify(item.type)})`;
          const data = (
            event === null ||
            event.type === 'dragstart' ||
            event.type === 'drop' ||
            event.type === 'copy' ||
            event.type === 'cut' ||
            event.type === 'paste'
          ) ? dt.getData(item.type) : '';
          if (data === '') {
            pushInline(children, label, data);
          } else {
            pushMultiline(children, label, data, item.type);
          }
        } else {
          if (pushFile && isSafe) {
            children.push(
              <ReportItemFile
                key={`report-item-${i}-file`}
                path={subpath}
                index={i}
                item={item}
              />
            );
          }
          if (pushHandle && isSafe) {
            children.push(
              <ReportItemHandle
                key={`report-item-${i}-handle`}
                path={subpath}
                index={i}
                item={item}
              />
            );
          }
          if (pushEntry && isSafe) {
            children.push(
              <ReportItemEntry
                key={`report-item-${i}-entry`}
                path={subpath}
                index={i}
                item={item}
              />
            );
          }
        }

        listItems.push(
          <ListItem key={`dt-item-${i}`} value={i}>
            {children}
          </ListItem>
        );
      }
    })();

    children.push(
      <OrderedList key="dt-items-list">
        {listItems}
      </OrderedList>
    );
  }

  children.push(<ReportFileList key="report-file-list" path={`${path}.files`} files={dt.files} />);

  return flush();
};
