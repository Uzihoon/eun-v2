import { useState } from 'react';
import _ from 'lodash';
import { styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import Bar from '../Bar';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TEXT_LIMIT = 37;

const TextArea: React.FC<TextAreaProps> = (props) => {
  const [height, setHeight] = useState(TEXT_LIMIT);

  const updateHeight = _.debounce((value: string) => {
    setHeight(Math.ceil(value.length / TEXT_LIMIT) * 25);
  }, 10);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault();
    updateHeight(event.target.value);
  };

  return (
    <TextAreaContainer style={{ height: `${height}px` }}>
      <StyledTextArea {...props} onChange={handleChange} />
      <StyledBar />
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.div`
  max-width: 360px;
  position: relative;
  min-height: 37px;
`;

const StyledTextArea = styled.textarea`
  height: 100%;
  border-bottom: 1px solid ${themedPalette.border_input};
  color: rgba(0, 0, 0, 0.38);
  letter-spacing: 0.2px;
  line-height: 20px;
  color: ${themedPalette.normal_txt};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;
  width: 100%;
  padding: ${space[1]} ${space[0]};
  transition: all 0.3s;

  &::placeholder {
    opacity: 0.3;
  }

  &:focus {
    background-color: ${themedPalette.bg_input};
  }

  &:hover {
    background-color: ${themedPalette.bg_hover_input};
  }

  &:focus + div:before,
  &:focus + div:after {
    width: 50%;
  }
`;

const StyledBar = styled(Bar)`
  bottom: 3px;
`;

export default TextArea;
