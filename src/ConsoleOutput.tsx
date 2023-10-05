import React from 'react';
import isPromise from 'is-promise';
import JSONOutput from './JSONOutput';
import BlobActions from './BlobActions';
import style from './ConsoleOutput.module.css';
import classNames from 'classnames';

export type ConsoleOutputType = any;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  type?: string;
  output: ConsoleOutputType;
};

const ConsoleOutput: React.FC<Props> = ({ type, output, className, ...props }) => {
  const initialResult = isPromise(output) ? <>&hellip;</> : <JSONOutput value={output} />;
  const [contents, setContents] = React.useState(initialResult);
  const [result, setResult] = React.useState(output);

  React.useEffect(() => {
    if (!isPromise(output)) return;
    let isMounted = true;
    Promise.resolve(output)
      .then((result) => {
        setResult(result);
        if (isMounted) {
          setContents(<JSONOutput value={result} />);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setContents(<>Error: {err.message}</>);
        }
      })
    return () => {
      isMounted = false;
    };
  }, [output, setContents]);

  return (
    <div className={classNames(style.ConsoleOutput, className)} {...props}>
      <pre className={style.ConsoleOutputContents}>{contents}</pre>
      {type && result && <BlobActions value={result} type={type} />}
    </div>
  );
};

export default ConsoleOutput;
