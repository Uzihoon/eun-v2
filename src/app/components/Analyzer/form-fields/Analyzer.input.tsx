import { useController, UseControllerProps } from 'react-hook-form';
import FormField from '~app/components/FormField';
import Input from '~app/ui/Input';
import { AnalyzerFormValues } from '~env/models/forms';
import { t } from '~i18n';

interface AnalyzerInputFormFieldProps extends UseControllerProps<AnalyzerFormValues> {
  label: string;
  placeholder?: string;
}

const AnalyzerInputFormField: React.FC<AnalyzerInputFormFieldProps> = ({ label, placeholder, ...props }) => {
  const {
    field: { ref, value, ...fields },
    fieldState: { invalid, error },
  } = useController(props);

  return (
    <FormField label={t.get(label)} required={!!props.rules?.required}>
      <Input
        {...fields}
        value={value as string}
        placeholder={placeholder && t.get(placeholder)}
        isInvalid={invalid}
        errorMessage={t.get(error?.message || '')}
      />
    </FormField>
  );
};

export default AnalyzerInputFormField;
