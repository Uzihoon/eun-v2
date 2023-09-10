export interface Analyzer {
  msgtype: number;
  seq_wt: string;
  rgen_type: number;
  seq_RGEN: string;
  seq_RGEN2: string;
  end_range: number;
  filt_n: number;
  filt_r: number;
  fileList: {
    [K: string]: File[];
  };
  msgType: number;
  nucleases: number;
  targetSeq: string;
  changeSeq: string;
  analyzerId: string;
}

//export type DeepKeys<T> = unknown extends T ? keyof T : object extends T ? string : T extends readonly any[] & IsTuple<T> ? AllowedIndexes<T> | DeepKeysPrefix<T, AllowedIndexes<T>> : T extends any[] ? never & 'Dynamic length array indexing is not supported' : T extends Date ? never : T extends object ? (keyof T & string) | DeepKeysPrefix<T, keyof T> : never;
