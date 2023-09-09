import {
  CHANGE_SEQ,
  FILES,
  FULL_SEQ,
  INDEX_PATTERN,
  NAME_PATTERN,
  NUC_LEASES,
  R_GEN_SEQ,
  TARGET_SEQ,
} from '~env/constants/form-field-name';

export type CrisprFormFieldsValues = {
  [NAME_PATTERN]: string;
  [INDEX_PATTERN]: string;
  [FILES]: File[];
  [FULL_SEQ]: string;
  [NUC_LEASES]: string;
  [R_GEN_SEQ]: string;
  [TARGET_SEQ]: string;
  [CHANGE_SEQ]: string;
};

export type AnalyzerFormValues = CrisprFormFieldsValues;
