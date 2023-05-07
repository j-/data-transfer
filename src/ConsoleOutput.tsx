import React from 'react';
import isPromise from 'is-promise';
import JSONOutput from './JSONOutput';
import BlobActions from './BlobActions';
import './ConsoleOutput.css';

export type ConsoleOutputType = any;

type Props = {
  type?: string;
  output: ConsoleOutputType;
}

const ConsoleOutput: React.FC<Props> = ({ type, output }) => {
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
    <div className="ConsoleOutput">
      <pre className="ConsoleOutput-contents">{contents}</pre>
      {type && result && <BlobActions value={result} type={type} />}
    </div>
  );
};

export default ConsoleOutput;
