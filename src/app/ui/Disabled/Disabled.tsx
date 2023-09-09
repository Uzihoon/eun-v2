import { styled } from 'styled-components';
import { themedPalette } from '~lib/styles/theme';

interface DisabledProps {
  text: string;
}

const Disabled: React.FC<DisabledProps> = ({ text }) => {
  return <DisabledContainer>{text}</DisabledContainer>;
};

const DisabledContainer = styled.div`
  width: 100%;
  font-size: 1em;
  color: ${themedPalette.file_txt};
`;

export default Disabled;
