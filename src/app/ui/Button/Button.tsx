import { styled } from 'styled-components';
import { themedPalette } from '~lib/styles/theme';

interface ButtonProps {
  className?: string;
  children: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledButton = styled(Button)`
  background-color: ${themedPalette.bg_main};
`;

export default StyledButton;
