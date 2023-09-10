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
