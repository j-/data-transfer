import React from 'react';
import './JSONOutput.css';

export interface Props<T = any> {
  value: T;
}

export const JSONOutputString: React.FC<Props<string>> = ({ value }) => (
  <code className="JSONOutputString">{JSON.stringify(value)}</code>
);

export const JSONOutputNumber: React.FC<Props<number>> = ({ value }) => (
  <code className="JSONOutputNumber">{value.toString()}</code>
);

export const JSONOutputBoolean: React.FC<Props<boolean>> = ({ value }) => (
  <code className="JSONOutputBoolean">{value.toString()}</code>
);

export const JSONOutputArray: React.FC<Props<Array<any>>> = ({ value }) => {
  const children: React.ReactChild[] = [];
  for (let i = 0; i < value.length; i++) {
    children.push(
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      <JSONOutput value={value[i]} key={i * 2} />
    );
    if (i < value.length - 1) {
      children.push(
        <span className="JSONOutput-symbol" key={i * 2 + 1}>{`, `}</span>
      );
    }
  }
  return (
    <span className="JSONOutputArray">
      <span className="JSONOutput-symbol">{`[`}</span>
      {children}
      <span className="JSONOutput-symbol">{`]`}</span>
    </span>
  )
};

export const JSONOutputObject: React.FC<Props<any>> = ({ value }) => (
  <span className="JSONOutputObject">
    <span className="JSONOutput-symbol">{`[object `}</span>
    <span className="JSONOutputObject-value">
      {String(value).replace(/^\[object |\]$/g, '')}
    </span>
    <span className="JSONOutput-symbol">{`]`}</span>
  </span>
);

const JSONOutput: React.FC<Props> = ({ value }) => (
  Array.isArray(value) ? <JSONOutputArray value={value} /> :
  typeof value === 'string' ? <JSONOutputString value={value} /> :
  typeof value === 'number' ? <JSONOutputNumber value={value} /> :
  typeof value === 'boolean' ? <JSONOutputBoolean value={value} /> :
  String(value).startsWith('[object') ? <JSONOutputObject value={value} /> :
  <code>{String(value)}</code>
);

export default JSONOutput;
