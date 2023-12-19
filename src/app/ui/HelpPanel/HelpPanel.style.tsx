import { styled } from 'styled-components';
import layer from '~lib/styles/layer';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';

export const StyledHelpPanel = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${layer.helpPanel};
  background-color: ${themedPalette.bg_nav};
  box-shadow: -12px -9px 12px 0 rgba(0, 0, 0, 0.09);
  border-radius: 20px 0 0 0;
`;

export const HelpPanelBox = styled.div`
  padding: ${space[3]};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HelpPanelClose = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const HelpPanelHeader = styled.div`
  padding: ${space[3]} ${space[2]};
  font-size: 1.2em;
  border-bottom: 1px solid ${themedPalette.border_input};
`;

export const HelpPanelContent = styled.div`
  padding: ${space[3]} ${space[2]};
  flex: 1;
  font-weight: normal;
  font-size: 1.1em;
  line-height: 2em;
`;
