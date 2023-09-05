import { styled } from 'styled-components';
import palette from '~lib/styles/palette';

const StyledLogo = styled.div`
  font-size: 25px;
  font-weight: 900;
`;

export const LightLogo = styled(StyledLogo)`
  color: ${palette.white};
`;

export const DarkLogo = styled(StyledLogo)`
  color: ${palette.grey.l700};
`;
