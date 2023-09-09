import { useController, UseControllerProps } from 'react-hook-form';
import FormField from '~app/components/FormField';
import Upload from '~app/ui/Upload';
import { AnalyzerFormValues } from '~env/models/forms';
import { t } from '~i18n';

interface AnalyzerUploadFormFieldProps extends UseControllerProps<AnalyzerFormValues> {
  label: string;
}

const AnalyzerUploadFormField: React.FC<AnalyzerUploadFormFieldProps> = ({ label, ...props }) => {
  const {
    field: { ref, ...fields },
    fieldState: { invalid, error },
  } = useController(props);

  return (
    <FormField label={t.get(label)} required={!!props.rules?.required}>
      <Upload
        {...fields}
        isInvalid={invalid}
        errorMessage={t.get(error?.message || '')}
        accept="application/gzip, .gz"
        multiple
      />
    </FormField>
  );
};

export default AnalyzerUploadFormField;
