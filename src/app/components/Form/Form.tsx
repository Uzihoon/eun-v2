import { UseFormRegister } from 'react-hook-form';
import Button from '~app/ui/Button';
import { t } from '~i18n';
import Paper from '../Paper';
import { FormContainer, FormFooter } from './Form.style';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  submitText?: string;
  error?: React.ReactElement | null;
}

const Form: React.FC<FormProps> = ({ submitText, children, error, ...props }) => {
  return (
    <FormContainer {...props}>
      <Paper>{children}</Paper>
      {error}
      <FormFooter>
        <Button actionButton itemType="submit">
          {submitText || t.get('button.submit')}
        </Button>
      </FormFooter>
    </FormContainer>
  );
};

export default Form;
