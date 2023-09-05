import { styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import Bar from '../Bar';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputContainer = styled.div`
  max-width: 360px;
  position: relative;
`;

const StyledInput = styled.input`
  border-bottom: 1px solid ${themedPalette.border_input};
  color: rgba(0, 0, 0, 0.38);
  letter-spacing: 0.2px;
  line-height: 20px;
  color: ${themedPalette.normal_txt};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: ${space[1]} ${space[0]};
  transition: all 0.3s;

  &::placeholder {
    opacity: 0.3;
  }

  &:focus {
    background-color: ${themedPalette.bg_input};
  }

  &:hover {
    background-color: ${themedPalette.bg_hover_input};
  }

  &:focus + div:before,
  &:focus + div:after {
    width: 50%;
  }
`;

const Input: React.FC<InputProps> = (props) => {
  return (
    <InputContainer>
      <StyledInput {...props} />
      <Bar />
    </InputContainer>
  );
};

export default Input;
