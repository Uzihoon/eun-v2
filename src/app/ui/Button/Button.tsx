import { css, styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import Base from '../Base';

const Button = styled(Base)<{ active?: boolean }>`
  transition: background 0.5s;
  padding: ${space[1]} ${space[2]};
  margin: 0 ${space[0]};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${themedPalette.bg_hover};
  }

  ${(props) =>
    props.active &&
    css`
      font-size: 0.9em;
      padding: ${space[1]} ${space[4]};
      background-color: ${themedPalette.primary_color};
      color: ${themedPalette.header_txt};
      transition: all 0.2s;

      &:hover {
        background-color: ${themedPalette.primary_color};
        opacity: 0.8;
      }
    `}
`;

export default Button;
