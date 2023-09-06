import { styled } from 'styled-components';
import { themedPalette } from '~lib/styles/theme';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${themedPalette.bg_main};
`;
