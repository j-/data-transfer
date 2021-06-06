import React from 'react';
import Support from './Support';
import { generateReport } from './generate-report';

const App: React.FC = () => {
  const [report, setReport] = React.useState<React.ReactNode>(null);

  React.useEffect(() => {
    const handler = (e: ClipboardEvent | DragEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      setReport(generateReport(e));
    };
    window.addEventListener('dragover', handler);
    window.addEventListener('drop', handler);
    document.addEventListener('paste', handler);
    return () => {
      window.removeEventListener('dragover', handler);
      window.removeEventListener('drop', handler);
      document.removeEventListener('paste', handler);
    };
  }, []);

  return (
    <div className="App container my-5">
      <h1 className="my-5">Data transfer</h1>
      <textarea
        className="form-control my-5"
        style={{ height: '4em', minHeight: '4em' }}
        defaultValue=""
        placeholder="Paste something into this textarea or this window, or drop something onto this window&hellip;"
      />

      {report && (
        <>
          <h2 className="my-3">Output</h2>
          <div className="my-5">{report}</div>
        </>
      )}

      <h2 className="my-3">Support</h2>
      <div className="my-5"><Support /></div>

    </div>
  );
};

export default App;
