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
  NUC_LEASES,
  R_GEN_SEQ,
  TARGET_SEQ,
  CHANGE_SEQ,
} from '~env/constants/form-field-name';
import AnalyzerInputFormField from './form-fields/Analyzer.input';
import AnalyzerTextareaFormField from './form-fields/Analyzer.textarea';
import AnalyzerUploadFormField from './form-fields/Analyzer.upload';
import AnalyzerRadioGroupFormField from './form-fields/Analyzer.radiogroup';
import Disabled from '~app/ui/Disabled';
import FormField from '../FormField';
import { t } from '~i18n';

const AnalyzerForm: React.FC = () => {
  const { handleSubmit, control } = useForm<AnalyzerFormValues>({
    shouldUnregister: true,
    shouldFocusError: true,
  });

  const onSubmit = useCallback<NonNullable<FormHTMLAttributes<HTMLFormElement>['onSubmit']>>(
    (event) =>
      handleSubmit((data) => {
        console.log(data);
      })(event),
    [handleSubmit],
  );

  return (
    <Form noValidate onSubmit={onSubmit}>
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
        defaultValue={[]}
        rules={{
          required: {
            value: true,
            message: 'form.required.sequencingData',
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
        name={NUC_LEASES}
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
        name={R_GEN_SEQ}
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
