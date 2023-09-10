export interface AnalyzedData {
  analyzerId: string;
  change_target: any; // TODO
  changed: number;
  chartIndex: Nucleotide[];
  cnt_del: number;
  cnt_ins: number;
  dl: number[][];
  ds: number[][];
  fileId: string;
  hdr: number;
  il: number[][];
  is: number[][];
  joins_length: number;
  seq_target: string;
  seq_type: number;
  standardLen: number;
  standard_seq: string;
  table: ReportTable[];
  tot_count: number;
  totlr_count: number;
  targetSeq: string;
  changeSeq: string;
}

export type SummaryType = 'primerSeq' | 'rgenSeq' | 'coreSeq' | 'normal';

export type SequenceType = 'desired' | 'undesired' | 'insertion' | 'deletion' | 'normal' | 'original';

export interface Summary {
  data: string;
  type: SummaryType;
}

export interface Nucleotide {
  '-'?: number;
  A?: number;
  C?: number;
  G?: number;
  T?: number;
}

export interface ReportTable {
  change: string;
  count: number;
  graphic: string;
  hdr: number;
  id: number;
  length: number;
  origin: string;
  type: number;
}

export interface Report {
  analyzed: AnalyzedData[];
  summary: Summary[];
}

export interface Reports {
  [K: string]: Report;
}

export interface ReportColor {
  title: string;
  id: SummaryType | SequenceType;
  color: string;
  type?: 'table' | 'graph' | 'all';
}
