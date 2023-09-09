import { useState } from 'react';
import { Analyzer } from '~env/models/analyzer';

const useRunAnalyzer = () => {
  const [workers, setWorkers] = useState(0);

  const onMessage = (event: MessageEvent<any>) => {
    console.log(event.data);
  };

  const runAnalyzer = (analyzerData: Analyzer) => {
    const { fileList } = analyzerData;
    let workerCount = 0;

    for (const key in fileList) {
      const message = {
        fileId: key,
        files: fileList[key],
      };
      const worker = new Worker('/worker.js');

      worker.postMessage(message);
      worker.onmessage = onMessage;

      ++workerCount;
    }

    setWorkers(workerCount);
  };

  return { runAnalyzer };
};

export default useRunAnalyzer;
