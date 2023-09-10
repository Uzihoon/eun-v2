import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { reportsState } from '~recoil/atom/report';
import { Analyzer } from '~env/models/analyzer';
import { WorkerMessage, WORKER_STATUS } from '~env/models/worker';
import { AnalyzedData } from '~env/models/report';

const useRunAnalyzer = () => {
  const [requestNum, setRequestNum] = useState(0);
  const [completeNum, setCompletNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<WORKER_STATUS>(WORKER_STATUS.IDLE);
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const setReports = useSetRecoilState(reportsState);

  const onMessage = (event: MessageEvent<WorkerMessage>) => {
    const { msgType, msg } = event.data;

    if (msgType === WORKER_STATUS.ERROR) {
      setStatus(msgType);
      setError(msg);
      return;
    }

    if (msgType === WORKER_STATUS.LOADING) {
      if (msg === 100) {
        setCompletNum((c) => c + 1);
      }
      setProgress(Math.ceil(msg));
    }

    if (msgType === WORKER_STATUS.SUMMARY) {
      setReports((oldReports) => ({
        ...oldReports,
        [id]: { summary: msg, analyzed: [] },
      }));
    }

    if (msgType === WORKER_STATUS.COMPLETE) {
      setReports((oldReports) => {
        const analyzedData = oldReports[id]?.analyzed || [];

        return {
          ...oldReports,
          [id]: {
            ...oldReports[id],
            analyzed: [...analyzedData, msg],
          },
        };
      });
    }
  };

  useEffect(() => {
    if (requestNum !== 0 && requestNum === completeNum) {
      setLoading(false);
      setStatus(WORKER_STATUS.COMPLETE);
    }
  }, [requestNum, completeNum]);

  const runAnalyzer = (analyzerData: Analyzer) => {
    const { fileList, analyzerId, ...data } = analyzerData;
    let workerCount = 0;

    for (const key in fileList) {
      const message = {
        ...data,
        fileId: key,
        files: fileList[key],
      };
      const worker = new Worker('/worker.js');

      worker.postMessage(message);
      worker.onmessage = onMessage;

      workerCount = workerCount + 2;
    }

    setLoading(true);
    setProgress(0);
    setRequestNum(workerCount);
    setCompletNum(0);
    setId(analyzerId);
    setStatus(WORKER_STATUS.LOADING);
  };

  return { runAnalyzer, status, error, loading, requestNum, progress, completeNum };
};

export default useRunAnalyzer;
