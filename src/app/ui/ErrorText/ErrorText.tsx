import { styled } from 'styled-components';
import animation from '~lib/styles/animation';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import Warning from '../Icons/Warning';

interface ErrorTextProps {
  errorMessage: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ errorMessage }) => {
  return (
    <StyledErrorText>
      <Warning width="15px" height="15px" strokeWidth={2} />
      <Text>{errorMessage}</Text>
    </StyledErrorText>
  );
};

const StyledErrorText = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  color: ${themedPalette.required_txt};
  margin-top: ${space[0]};
  display: flex;
  align-items: center;
  animation: ${animation.fadeIn} 0.5s forwards;
`;

const Text = styled.div`
  margin-left: ${space[0]};
  margin-top: -1px;
`;

export default ErrorText;
