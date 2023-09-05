import styled from 'styled-components';
import Content from '~app/ui/Content';
import layer from '~lib/styles/layer';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';

export const PaperContainer = styled(Content)`
  background-color: ${themedPalette.bg_paper};
  z-index: ${layer.content};
  min-height: 50vh;
  margin: auto;
  position: relative;
  top: -250px;
  border-radius: 20px;
  border: 0px transparent;
  padding: ${space[6]};
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
`;
