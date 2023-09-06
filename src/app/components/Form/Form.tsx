import Button from '~app/ui/Button';
import { t } from '~i18n';
import Paper from '../Paper';
import { FormContainer, FormFooter } from './Form.style';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  submitText?: string;
}

const Form: React.FC<FormProps> = ({ submitText, children, ...props }) => {
  return (
    <FormContainer {...props}>
      <Paper>{children}</Paper>
      <FormFooter>
        <Button active>{submitText || t.get('button.submit')}</Button>
      </FormFooter>
    </FormContainer>
  );
};

export default Form;
