import { useEffect, useState } from 'react';
import Support from './Support';
import { generateReport } from './generate-report';

const App: React.FC = () => {
  const [report, setReport] = useState<React.ReactNode>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const handler = (e: ClipboardEvent | DragEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      setReport(generateReport(e));
    };
    const options: AddEventListenerOptions = { signal, capture: true };
    window.addEventListener('dragover', handler, options);
    window.addEventListener('drop', handler, options);
    document.addEventListener('paste', handler, options);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container mx-auto px-4 sm:my-16">
      <div className="my-8 flex gap-1 sm:gap-2 text-3xl">
        <img
          src="/favicon.svg"
          className="w-[1em]"
          width={16}
          height={16}
          alt="data-transfer.io icon"
          role="presentation"
        />
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
