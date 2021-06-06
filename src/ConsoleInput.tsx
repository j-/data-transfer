import React from 'react';
import './ConsoleInput.css';

type Props = {
  input: string;
}

const ConsoleInput: React.FC<Props> = ({ input }) => (
  <pre className="ConsoleInput">
    {input}
  </pre>
);

export default ConsoleInput;
