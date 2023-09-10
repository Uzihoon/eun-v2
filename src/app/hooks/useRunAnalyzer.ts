import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { reportsState } from '~recoil/atom/report';
import { Analyzer } from '~env/models/analyzer';
import { WorkerMessage, WORKER_STATUS } from '~env/models/worker';

const useRunAnalyzer = () => {
  const [requestNum, setRequestNum] = useState(0);
  const [completeNum, setCompletNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<WORKER_STATUS>(WORKER_STATUS.IDLE);
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
      const { analyzerId, summary } = msg;
      setReports((oldReports) => ({
        ...oldReports,
        [analyzerId]: { summary, analyzed: [] },
      }));
    }

    if (msgType === WORKER_STATUS.COMPLETE) {
      const { analyzerId } = msg;
      setReports((oldReports) => {
        const analyzedData = oldReports[analyzerId]?.analyzed || [];
        return {
          ...oldReports,
          [analyzerId]: {
            ...oldReports[analyzerId],
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
    const { fileList, ...data } = analyzerData;
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
    setStatus(WORKER_STATUS.LOADING);
  };

  return { runAnalyzer, status, error, loading, requestNum, progress, completeNum };
};

export default useRunAnalyzer;
