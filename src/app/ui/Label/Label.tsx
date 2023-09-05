import { styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const StyledLabel = styled.label`
  display: flex;
  font-size: 0.9em;
  margin-bottom: ${space[1]};
  color: ${themedPalette.label_txt};
  font-weight: 700;
`;

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;