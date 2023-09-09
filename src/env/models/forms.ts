import {
  CHANGE_SEQ,
  END_RANGE,
  FILES,
  FULL_SEQ,
  INDEX_PATTERN,
  NAME_PATTERN,
  NUCLEASES,
  R_GEN_SEQ,
  TARGET_SEQ,
} from '~env/constants/form-field-name';

export type CrisprFormFieldsValues = {
  [NAME_PATTERN]: string;
  [INDEX_PATTERN]: string;
  [FILES]: File[];
  [FULL_SEQ]: string;
  [NUCLEASES]: string;
  [R_GEN_SEQ]: string;
  [END_RANGE]: string;
  [TARGET_SEQ]: string;
  [CHANGE_SEQ]: string;
};

export type AnalyzerFormValues = CrisprFormFieldsValues;
