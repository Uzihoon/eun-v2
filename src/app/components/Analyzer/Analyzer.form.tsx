import { NUCLEOTIDE } from '~env/constants';
import Form from '../Form';
import { useForm } from 'react-hook-form';
import { AnalyzerFormValues } from '~env/models/forms';
import { FormHTMLAttributes, useCallback } from 'react';
import {
  FILES,
  FULL_SEQ,
  INDEX_PATTERN,
  NAME_PATTERN,
  NUCLEASES,
  R_GEN_SEQ,
  TARGET_SEQ,
  CHANGE_SEQ,
  END_RANGE,
} from '~env/constants/form-field-name';
import AnalyzerInputFormField from './form-fields/Analyzer.input';
import AnalyzerTextareaFormField from './form-fields/Analyzer.textarea';
import AnalyzerUploadFormField from './form-fields/Analyzer.upload';
import AnalyzerRadioGroupFormField from './form-fields/Analyzer.radiogroup';
import Disabled from '~app/ui/Disabled';
import FormField from '../FormField';
import { t } from '~i18n';
import { isArray } from 'lodash';
import useFormatAnalyzerFormData from '~app/hooks/useFormatAnalyzerFormData';
import Alert from '~app/ui/Alert';
import useRunAnalyzer from '~app/hooks/useRunAnalyzer';

const AnalyzerForm: React.FC = () => {
  const { error, dispatchFormat } = useFormatAnalyzerFormData();
  const { runAnalyzer } = useRunAnalyzer();

  const { handleSubmit, control } = useForm<AnalyzerFormValues>({
    shouldUnregister: true,
    shouldFocusError: true,
  });

  const onSubmit = useCallback<NonNullable<FormHTMLAttributes<HTMLFormElement>['onSubmit']>>(
    (event) =>
      handleSubmit((data) => {
        const analyzerData = dispatchFormat(data);

        if (!analyzerData || error) {
          return;
        }

        runAnalyzer(analyzerData);
      })(event),
    [handleSubmit, dispatchFormat, runAnalyzer, error],
  );

  return (
    <Form
      noValidate
      onSubmit={onSubmit}
      error={
        error ? (
          <Alert
            content={t.get('alert.invalid.file.content')}
            header={t.get('alert.invalid.file.header')}
            type="ERROR"
          />
        ) : null
      }
    >
      <AnalyzerInputFormField
        name={NAME_PATTERN}
        control={control}
        label="form.label.fileName"
        placeholder="form.desc.fileName"
      />
      <AnalyzerInputFormField
        name={INDEX_PATTERN}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'form.required.indexPattern',
          },
        }}
        label="form.label.fileIndex"
        placeholder="form.desc.fileIndex"
      />
      <AnalyzerUploadFormField
        name={FILES}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'form.required.sequencingData',
          },
          validate: {
            isEven: (file) => (isArray(file) && file.length % 2 === 0) || 'form.invalid.sequencingData',
          },
        }}
        label="form.label.sequencingData"
      />
      <AnalyzerTextareaFormField
        name={FULL_SEQ}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'form.required.referenceSequence',
          },
        }}
        label="form.label.referenceSequence"
        placeholder="form.desc.referenceSequence"
      />
      <AnalyzerInputFormField
        name={R_GEN_SEQ}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'form.required.targetSequence',
          },
        }}
        label="form.label.targetSequence"
        placeholder="form.desc.targetSequence"
      />
      <AnalyzerInputFormField
        name={END_RANGE}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'form.required.standardRange',
          },
          pattern: {
            value: /^\d*$/,
            message: 'form.invalid.standardRange',
          },
        }}
        label="form.label.standardRange"
        placeholder="form.desc.standardRange"
      />
      <FormField label={t.get('form.label.nucleases')} required>
        <Disabled text="SpCas9 from Streptococcus pyogenes: 5'-NGG-3'" />
      </FormField>
      <AnalyzerRadioGroupFormField
        name={TARGET_SEQ}
        label="form.label.targetNucleotide"
        control={control}
        defaultValue={NUCLEOTIDE[0]}
      />
      <AnalyzerRadioGroupFormField
        name={CHANGE_SEQ}
        label="form.label.desiredNucleotide"
        control={control}
        defaultValue={NUCLEOTIDE[1]}
      />
    </Form>
  );
};

export default AnalyzerForm;
