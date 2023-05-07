import React from 'react';
import isPromise from 'is-promise';
import JSONOutput from './JSONOutput';
import './ConsoleOutput.css';

export type ConsoleOutputType = any;

type Props = {
  type?: string;
  output: ConsoleOutputType;
}

const ConsoleOutput: React.FC<Props> = ({ type, output }) => {
  const initialResult = isPromise(output) ? <>&hellip;</> : <JSONOutput value={output} />;
  const [result, setResult] = React.useState(initialResult);

  const handleClickOpen = React.useCallback(() => {
    const blob = new Blob([output], { type });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }, [output, type]);

  React.useEffect(() => {
    if (!isPromise(output)) return;
    let isMounted = true;
    Promise.resolve(output)
      .then((result) => {
        if (isMounted) {
          setResult(<JSONOutput value={result} />);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setResult(<>Error: {err.message}</>);
        }
      })
    return () => {
      isMounted = false;
    };
  }, [output, setResult]);

  return (
    <div className="ConsoleOutput">
      <pre className="ConsoleOutput-contents d-inline">{result}</pre>
      {type && <button className="btn btn-light btn-sm" type="button" onClick={handleClickOpen}>Open in new tab</button>}
    </div>
  );
};

export default ConsoleOutput;
