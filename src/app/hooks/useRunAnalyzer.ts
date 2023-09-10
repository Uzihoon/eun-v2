import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { reportsState } from '~recoil/atom/report';
import { Analyzer, Summary } from '~env/models/analyzer';
import { WorkerMessage, WORKER_STATUS } from '~env/models/worker';
import { Report } from '~env/models/report';

const useRunAnalyzer = () => {
  const [workers, setWorkers] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [summary, setSummary] = useState<Summary[]>([]);
  const [status, setStatus] = useState<WORKER_STATUS>(WORKER_STATUS.IDLE);

  const setReports = useSetRecoilState(reportsState);

  const onMessage = (event: MessageEvent<WorkerMessage>) => {
    const { msgType, msg } = event.data;

    if (msgType === WORKER_STATUS.ERROR) {
    }

    if (msgType === WORKER_STATUS.LOADING) {
      if (msg === 100) {
        setCompleted((c) => c + 1);
      }
      setProgress(Math.ceil(msg));
    }

    if (msgType === WORKER_STATUS.SUMMARY) {
      setSummary([...summary, msg]);
    }

    if (msgType === WORKER_STATUS.COMPLETE) {
      const { analyzerId } = msg as Report;
      setReports((oldReports) => ({
        ...oldReports,
        [analyzerId]: [...(oldReports[analyzerId] || []), msg],
      }));
    }

    setStatus(msgType);
  };

  useEffect(() => {
    if (workers === completed) {
      setLoading(false);
    }
  }, [workers, completed]);

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
    setWorkers(workerCount);
    setCompleted(0);
  };

  return { runAnalyzer, status, loading, workers, progress, completed };
};

export default useRunAnalyzer;
