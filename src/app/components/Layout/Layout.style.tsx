import { styled } from 'styled-components';
import { themedPalette } from '~lib/styles/theme';

export const Container = styled.div`
  width: 100%;
  background-color: ${themedPalette.bg_main};
  min-height: 100vh;
`;
