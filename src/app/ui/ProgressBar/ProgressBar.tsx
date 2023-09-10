import { styled } from 'styled-components';
import palette from '~lib/styles/palette';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarStyled progress={progress} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  width: 250px;
  height: 10px;
  border-radius: 5px;
  background-color: ${palette.grey.l100};
  overflow: hidden;
  position: relative;
`;

const ProgressBarStyled = styled.div<ProgressBarProps>`
  width: ${(props) => props.progress}%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${palette.point};
  transition: all 0.3s;
`;

export default ProgressBar;
