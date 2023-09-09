import { useController, UseControllerProps } from 'react-hook-form';
import FormField from '~app/components/FormField';
import RadioGroup from '~app/ui/RadioGroup';
import { RadioItems } from '~app/ui/types';
import { NUCLEOTIDE } from '~env/constants';
import { AnalyzerFormValues } from '~env/models/forms';
import { t } from '~i18n';

const nucleotideItems: RadioItems = NUCLEOTIDE.map((v) => ({ id: v, label: v }));

interface AnalyzerRadioGroupFormFieldProps extends UseControllerProps<AnalyzerFormValues> {
  label: string;
}

const AnalyzerRadioGroupFormField: React.FC<AnalyzerRadioGroupFormFieldProps> = ({ label, ...props }) => {
  const {
    field: { value, onChange },
  } = useController(props);

  return (
    <FormField label={t.get(label)} required>
      <RadioGroup items={nucleotideItems} value={value as string} onClick={onChange} />
    </FormField>
  );
};

export default AnalyzerRadioGroupFormField;
