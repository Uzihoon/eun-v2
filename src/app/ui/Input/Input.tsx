import { RefCallBack } from 'react-hook-form';
import { css, styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import Bar from '../Bar';
import ErrorText from '../ErrorText';

interface StyledInputProps {
  isInvalid?: boolean;
  ref?: RefCallBack;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, StyledInputProps {
  errorMessage?: string;
  value?: any;
}

const Input: React.FC<InputProps> = ({ isInvalid, errorMessage, ref, ...props }) => {
  return (
    <InputContainer>
      <StyledInput {...props} isInvalid={isInvalid} ref={ref} />
      <Bar />
      {isInvalid && errorMessage && <ErrorText errorMessage={errorMessage} />}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  max-width: 360px;
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
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

  ${(props) =>
    props.isInvalid &&
    css`
      border-bottom: 1px solid ${themedPalette.required_txt};

      &:focus {
        border-bottom: 0px;
      }
    `}
`;

export default Input;
