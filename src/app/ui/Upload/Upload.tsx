import { useRef } from 'react';
import { styled } from 'styled-components';
import { t } from '~i18n';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import { center } from '~lib/styles/variables';
import ArrowUp from '../Icons/ArrowUp';

interface UploadProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Upload: React.FC<UploadProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  return (
    <UploadContainer onClick={handleClick}>
      <UploadInput {...props} type="file" multiple ref={inputRef} />
      <UploadBox>
        <UploadIcon>
          <ArrowUp />
        </UploadIcon>
        <UploadText>{t.get('upload.title')}</UploadText>
        <UploadDesc>{t.get('upload.desc')}</UploadDesc>
      </UploadBox>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
  background-color: ${themedPalette.bg_upload};
  border: 1px dashed ${themedPalette.border_upload};
  cursor: pointer;
  margin-top: ${space[3]};
  transition: 0.2s;

  &:hover {
    background-color: ${themedPalette.bg_hover_upload};
  }
`;

const UploadBox = styled.div`
  width: 100%;
  height: 100%;
  padding: ${space[5]};
  ${center};
  flex-direction: column;
`;

const UploadIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-bottom: ${space[2]};
  color: ${themedPalette.normal_txt};
`;

const UploadText = styled.div`
  font-size: 0.9em;
  font-weight: bold;
`;

const UploadDesc = styled.div`
  font-size: 0.8em;
  margin-top: ${space[1]};
  color: ${themedPalette.upload_desc_txt};
`;

const UploadInput = styled.input`
  display: none;
`;

export default Upload;
