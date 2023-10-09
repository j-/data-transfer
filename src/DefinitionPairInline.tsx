import isPromise from 'is-promise';
import JSONOutput from './JSONOutput';
import { useEffect, useState } from 'react';

export type DefinitionPairInlineProps = {
  label: string;
  value: any;
  defaultExpanded?: boolean;
};

const DefinitionPairInline: React.FC<DefinitionPairInlineProps> = ({ label, value }) => {
  const initialResult = isPromise(value) ? <>&hellip;</> : <JSONOutput value={value} />;
  const [contents, setContents] = useState(initialResult);
  // const [result, setResult] = useState(value);

  useEffect(() => {
    if (!isPromise(value)) return;
    let isMounted = true;
    Promise.resolve(value)
      .then((result) => {
        // setResult(result);
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
  }, [value, setContents]);

  return (
    <div>
      <div className="inline-block text-gray-600 max-w-[50%] truncate font-mono after:content-['\27f9'] after:mx-2 after:text-gray-400">
        {label}
      </div>

      <div className="inline-block truncate">
        {contents}
      </div>
    </div>
  );
};

export default DefinitionPairInline;
