import { styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import Base from '../Base';

const Button = styled(Base)`
  transition: background 0.5s;
  padding: ${space[1]} ${space[2]};
  margin: 0 ${space[0]};
  border-radius: 5px;

  &:hover {
    background-color: ${themedPalette.bg_hover};
  }
`;

export default Button;
