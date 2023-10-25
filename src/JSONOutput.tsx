import styles from './JSONOutput.module.css';

export interface Props<T = any> {
  value: T;
}

export const JSONOutputString: React.FC<Props<string>> = ({ value }) => (
  <code className={styles.JSONOutputString}>{JSON.stringify(value)}</code>
);

export const JSONOutputNumber: React.FC<Props<number>> = ({ value }) => (
  <code className={styles.JSONOutputNumber}>{value.toString()}</code>
);

export const JSONOutputBoolean: React.FC<Props<boolean>> = ({ value }) => (
  <code className={styles.JSONOutputBoolean}>{value.toString()}</code>
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
        <span className={styles.JSONOutputSymbol} key={i * 2 + 1}>{`, `}</span>
      );
    }
  }
  return (
    <span className={styles.JSONOutputArray}>
      <span className={styles.JSONOutputSymbol}>{`[`}</span>
      {children}
      <span className={styles.JSONOutputSymbol}>{`]`}</span>
    </span>
  )
};

export const JSONOutputObject: React.FC<Props<any>> = ({ value }) => (
  <span className={styles.JSONOutputObject}>
    <span className={styles.JSONOutputSymbol}>{`[object `}</span>
    <span className={styles.JSONOutputObjectValue}>
      {String(value).replace(/^\[object |\]$/g, '')}
    </span>
    <span className={styles.JSONOutputSymbol}>{`]`}</span>
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
