import { styled } from 'styled-components';
import animation from '~lib/styles/animation';
import layer from '~lib/styles/layer';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import { center } from '~lib/styles/variables';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  z-index: ${layer.header};
  overflow: hidden;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 10% 20%, rgb(210, 36, 129) 0%, rgb(152, 75, 215) 90%);
  z-index: -1;
`;

export const HeaderTitle = styled.div`
  width: 100%;
  color: ${themedPalette.header_txt};
  font-weight: 900;
  font-size: 4.5rem;
  padding-top: ${space[7]};
  ${center};
  animation: ${animation.popInFromBottom} 0.7s forwards ease-in-out;
`;

export const HeaderDesc = styled.div`
  color: ${themedPalette.header_txt};
  font-size: 0.9rem;
  color: ${themedPalette.desc_txt};
  margin-top: ${space[2]};
  opacity: 0;
  animation: ${animation.popInFromBottom} 0.8s forwards;
  animation-delay: 0.2s;
  ${center};
`;
