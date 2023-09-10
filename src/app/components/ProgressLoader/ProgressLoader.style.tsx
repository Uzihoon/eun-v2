import { styled } from 'styled-components';
import layer from '~lib/styles/layer';
import palette from '~lib/styles/palette';
import space from '~lib/styles/space';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${layer.loader};
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;

export const LoaderBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProgressTitle = styled.div`
  color: ${palette.white};
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: ${space[1]};
`;

export const ProgressDescription = styled.div`
  color: ${palette.white};
  font-size: 0.9em;
  margin-bottom: ${space[6]};
`;

export const Progress = styled.div`
  color: ${palette.white};
  font-size: 5em;
  font-weight: 900;
  margin-bottom: ${space[1]};
  transition: all 0.2s;
`;

export const ProgressInfo = styled.div`
  color: ${palette.white};
  margin-bottom: ${space[1]};
  font-size: 1em;
`;
