export enum WORKER_STATUS {
  SUMMARY = 0,
  ERROR = 1,
  LOADING = 2,
  IDLE = 3,
  COMPLETE = 4,
}

export interface WorkerMessage {
  msgType: WORKER_STATUS;
  msg: any;
}
