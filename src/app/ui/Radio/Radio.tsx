import { styled } from 'styled-components';
import animation from '~lib/styles/animation';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import { RadioItem } from '../types';

interface RadioProps extends RadioItem {
  selected?: boolean;
  onClick: (id: string) => void;
}

const Radio: React.FC<RadioProps> = ({ selected, id, label, onClick }) => {
  return (
    <RadioContainer onClick={() => onClick(id)}>
      <RadioBox>
        <RadioActivateBackground />
        <StyledRadio selected={selected}>{selected && <RadioSelection />}</StyledRadio>
      </RadioBox>
      {label && (
        <RadioLabelBox>
          <RadioLabel>{label}</RadioLabel>
        </RadioLabelBox>
      )}
    </RadioContainer>
  );
};

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioActivateBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.2s;
  opacity: 0;
  border-radius: 100%;
`;

const RadioBox = styled.div`
  width: 17px;
  height: 17px;
  position: relative;
  z-index: 0;
  cursor: pointer;

  &:focus ${RadioActivateBackground} {
    background-color: rgba(208, 40, 133, 0.15);
  }

  &:hover ${RadioActivateBackground} {
    background-color: rgba(208, 40, 133, 0.04);
    transform: scale(2);
    opacity: 1;
  }
`;

const StyledRadio = styled.div<{ selected?: boolean }>`
  border: solid 2px ${(props) => (props.selected ? themedPalette.primary_color : themedPalette.border_radio)};
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const RadioSelection = styled.div`
  transform: translateX(-50%) translateY(-50%) scale(1);
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  transition: ease 0.28s;
  border: 5px solid ${themedPalette.primary_color};
  animation: ${animation.fadeIn} 0.3s forwards;
`;

const RadioLabelBox = styled.div`
  margin-left: ${space[2]};
`;

const RadioLabel = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  color: ${themedPalette.normal_txt};
`;

export default Radio;
