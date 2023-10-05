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
    <div className="container mx-auto my-16">
      <div className="my-8 flex gap-1 sm:gap-2 text-xl sm:text-3xl">
        <img src="/favicon.svg" className="w-[1em]" />
        <h1>data-transfer.io</h1>
      </div>

      <textarea
        className="my-5 h-[4.75rem] min-h-[4.75rem] w-96 textarea textarea-bordered"
        defaultValue=""
        placeholder="Paste something into this textarea or this window,&#13;or drop something onto this window&hellip;"
      />

      {report && (
        <>
          <h2 className="my-3 text-xl font-bold">Output</h2>
          <div className="my-5">{report}</div>
        </>
      )}

      <h2 className="my-3 text-xl font-bold">Support</h2>
      <div className="my-5"><Support /></div>
    </div>
  );
};

export default App;
