import { useState } from 'react';
import HelpPanel from '~app/ui/HelpPanel';
import Label from '~app/ui/Label';
import { FormFieldContainer, RequiredField } from './FormField.style';
import Info from '~app/ui/Info';

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  required?: boolean;
  helpPanelTitle?: string;
  helpPanelContent?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, required, children, helpPanelContent, helpPanelTitle }) => {
  const [open, setOpen] = useState(false);

  const onClickInfo = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <FormFieldContainer>
      <Label>
        {label} {required && <RequiredField>*</RequiredField>}
        {helpPanelContent && helpPanelTitle && (
          <>
            <Info onClick={onClickInfo} />
            <HelpPanel open={open} onClose={onClose} title={helpPanelTitle} content={helpPanelContent} />
          </>
        )}
      </Label>

      {children}
    </FormFieldContainer>
  );
};

export default FormField;
