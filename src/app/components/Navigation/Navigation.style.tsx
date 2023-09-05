import styled from 'styled-components';
import Button from '~app/ui/Button';
import layer from '~lib/styles/layer';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import { between, center } from '~lib/styles/variables';

export const NavContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${themedPalette.bg_nav};
  border-bottom: 1px solid ${themedPalette.border_nav};
  padding: 0 ${space[6]};
  z-index: ${layer.nav};
  ${between};
`;

export const Nav = styled.div`
  height: 100%;
  ${center}
`;

export const Selected = styled(Button)`
  font-weight: bold;
  &:hover {
    cursor: default;
    background-color: transparent;
  }
`;
