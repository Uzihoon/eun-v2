import { useState } from 'react';
import { styled } from 'styled-components';
import space from '~lib/styles/space';
import Radio from '../Radio';
import { RadioItems } from '../types';

interface RadioGroupProps {
  items: RadioItems;
  defaultItem?: string;
  onClick?: (id: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ defaultItem, items, onClick }) => {
  const [selectedId, setSelectedId] = useState(defaultItem || items[0]?.id);

  const handleClick = (id: string) => {
    if (onClick) onClick(id);
    setSelectedId(id);
    console.log(id);
  };

  return (
    <RadioGroupContainer>
      {items.map(({ id, label }) => (
        <RadioGroupBox key={id}>
          <Radio id={id} label={label} onClick={handleClick} selected={selectedId === id} />
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
