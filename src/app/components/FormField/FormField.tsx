import Label from '~app/ui/Label';
import { FormFieldContainer, RequiredField } from './FormField.style';

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, required, children }) => {
  return (
    <FormFieldContainer>
      <Label>
        {label} {required && <RequiredField>*</RequiredField>}
      </Label>
      {children}
    </FormFieldContainer>
  );
};

export default FormField;
