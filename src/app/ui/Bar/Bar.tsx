import { styled } from 'styled-components';
import { themedPalette } from '~lib/styles/theme';

const Bar = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0.5px;
    position: absolute;
    background: ${themedPalette.primary_color};
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

export default Bar;
