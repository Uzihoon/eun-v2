import { FormContainer } from './Form.style';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return <FormContainer {...props}>{children}</FormContainer>;
};

export default Form;
