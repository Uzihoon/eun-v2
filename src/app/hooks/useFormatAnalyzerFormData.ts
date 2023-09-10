import { useMemo, useState } from 'react';
import {
  CHANGE_SEQ,
  END_RANGE,
  FILES,
  FULL_SEQ,
  INDEX_PATTERN,
  NAME_PATTERN,
  R_GEN_SEQ,
  TARGET_SEQ,
} from '~env/constants/form-field-name';
import { Analyzer } from '~env/models/analyzer';
import { CrisprFormFieldsValues } from '~env/models/forms';
import { getUniqueId } from '~lib/utilities/getUniqueId';

const useFormatAnalyzerFormData = () => {
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState<string[]>([]);

  const filterFileList = (pattern: RegExp, files: File[]) => {
    const fileList: { [K: string]: File[] } = {};
    const invalidFiles: string[] = [];
    files.forEach((file) => {
      const match = pattern.exec(file.name);
      if (match) {
        fileList[match[1]] = [...(fileList[match[1]] || []), file].sort((a, b) => ('' + a.name).localeCompare(b.name));
      } else {
        invalidFiles.push(file.name);
      }
    });

    for (const key in fileList) {
      const fileSet = fileList[key];
      if (fileSet.length < 2) {
        invalidFiles.push(...fileSet.map((file) => file.name));
        delete fileList[key];
      }
    }

    return {
      fileList,
      invalidFiles,
    };
  };

  const dispatchFormat = (formData: CrisprFormFieldsValues): Analyzer | null => {
    const {
      [NAME_PATTERN]: namePattern,
      [INDEX_PATTERN]: indexPattern,
      [FILES]: files,
      [FULL_SEQ]: fullseq,
      [R_GEN_SEQ]: rgenseq,
      [END_RANGE]: end_range,
      [TARGET_SEQ]: targetSeq,
      [CHANGE_SEQ]: changeSeq,
    } = formData;
    const seq_wt = fullseq.toUpperCase().replace(/\s/g, '');
    const seq_RGEN = rgenseq.toUpperCase().replace(/\s/g, '');
    const msgType = 0;

    // TODO: Need to update constant values
    const nuctype = 0;
    const nucleases = 1 as number;

    // Optional values
    const filt_n = 1;
    const filt_r = 5;

    let rgen_type = 0;
    let seq_RGEN2 = '';

    if (nuctype === 0 && nucleases === 6) {
      rgen_type = 1;
    } else if (+nuctype === 1) {
      seq_RGEN2 = '';

      switch (nucleases) {
        case 9:
          rgen_type = 4;
          break;
        case 10:
          rgen_type = 3;
          break;
        default:
          rgen_type = 2;
          break;
      }
    }

    const filePattern = new RegExp(`${namePattern || ''}(.*)${indexPattern}`);
    const { fileList, invalidFiles } = filterFileList(filePattern, files);
    setInvalid(invalidFiles);

    if (Object.keys(fileList).length === 0) {
      setError(true);
      return null;
    }

    setError(false);

    const analyzerId = getUniqueId();

    const analyzerFormatData = {
      msgtype: 0,
      seq_wt,
      rgen_type,
      seq_RGEN,
      seq_RGEN2,
      end_range: +end_range,
      filt_n,
      filt_r,
      fileList,
      msgType,
      nucleases,
      targetSeq: targetSeq.toUpperCase(),
      changeSeq: changeSeq.toUpperCase(),
      analyzerId,
    };

    return analyzerFormatData;
  };

  return { error, dispatchFormat, invalid };
};

export default useFormatAnalyzerFormData;
