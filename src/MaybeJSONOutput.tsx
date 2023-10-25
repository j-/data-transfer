import isPromise from 'is-promise';
import { useEffect, useState } from 'react';
import JSONOutput from './JSONOutput';

export type MaybeJSONOutputProps<T> = {
  value: T | Promise<T> | PromiseLike<T>;
};

function MaybeJSONOutput<T>({ value }: MaybeJSONOutputProps<T>) {
  const initialResult = isPromise(value) ? <>&hellip;</> : <JSONOutput value={value} />;
  const [contents, setContents] = useState(initialResult);

  useEffect(() => {
    if (!isPromise(value)) return;
    let isMounted = true;

    Promise.resolve(value)
      .then((result) => {
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

  return contents;
};

export default MaybeJSONOutput;
