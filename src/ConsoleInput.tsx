import React from 'react';
import styles from './ConsoleInput.module.css';

type Props = {
  input: string;
};

const ConsoleInput: React.FC<Props> = ({ input }) => (
  <pre className={styles.ConsoleInput}>
    {input}
  </pre>
);

export default ConsoleInput;
