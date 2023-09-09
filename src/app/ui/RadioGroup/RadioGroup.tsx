import { styled } from 'styled-components';
import space from '~lib/styles/space';
import Radio from '../Radio';
import { RadioItems } from '../types';

interface RadioGroupProps {
  items: RadioItems;
  value: any;
  onClick?: (id: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ value, items, onClick }) => {
  const handleClick = (id: string) => {
    if (onClick) onClick(id);
  };

  return (
    <RadioGroupContainer>
      {items.map(({ id, label }) => (
        <RadioGroupBox key={id}>
          <Radio id={id} label={label} onClick={handleClick} selected={value === id} />
        </RadioGroupBox>
      ))}
    </RadioGroupContainer>
  );
};

const RadioGroupContainer = styled.div`
  margin: ${space[1]} 0;
`;

const RadioGroupBox = styled.div`
  margin: ${space[2]} 0;
`;

export default RadioGroup;
