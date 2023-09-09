import { useRef, useState } from 'react';
import { css, styled } from 'styled-components';
import filterUniqueFiles from '~env/modules/filterUniqueFiles';
import formatFileListToArray from '~env/modules/formatFileListToArray';
import { t } from '~i18n';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import { center } from '~lib/styles/variables';
import ErrorText from '../ErrorText';
import ArrowUp from '../Icons/ArrowUp';
import Close from '../Icons/Close';

interface UploadContainerProps {
  isInvalid?: boolean;
}

interface UploadProps extends React.InputHTMLAttributes<HTMLInputElement>, UploadContainerProps {
  errorMessage?: string;
  value?: any;
}

const Upload: React.FC<UploadProps> = ({ isInvalid, errorMessage, onChange, value, ...props }) => {
  const [fileList, setFileList] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const updateFileList = (fileList: File[]) => {
    setFileList(fileList);
    if (onChange) onChange(fileList as any);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = formatFileListToArray(event.target.files);
    updateFileList(filterUniqueFiles(fileList, files));
  };

  const onClickRemoveButton = (fileName: string) => {
    updateFileList(fileList.filter((file) => file.name !== fileName));
  };

  return (
    <div>
      <UploadContainer onClick={handleClick} isInvalid={isInvalid}>
        <UploadInput
          {...props}
          type="file"
          multiple
          ref={inputRef}
          onChange={handleChange}
          onClick={(event) => (event.currentTarget.value = null as any)}
        />
        <UploadBox>
          <UploadIcon>
            <ArrowUp />
          </UploadIcon>
          <UploadText>{t.get('upload.title')}</UploadText>
          <UploadDesc>{t.get('upload.desc')}</UploadDesc>
        </UploadBox>
      </UploadContainer>
      {fileList.map(({ name }) => (
        <FileBox key={name}>
          <FileName>{name}</FileName>
          <RemoveFileButton onClick={() => onClickRemoveButton(name)}>
            <Close width={15} height={15} />
          </RemoveFileButton>
        </FileBox>
      ))}
      {isInvalid && errorMessage && <ErrorText errorMessage={errorMessage} />}
    </div>
  );
};

const UploadContainer = styled.div<UploadContainerProps>`
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

  ${(props) =>
    props.isInvalid &&
    css`
      border: 1px solid ${themedPalette.required_txt};
    `}
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

const RemoveFileButton = styled.div``;

const FileBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${space[1]};
  padding: ${space[0]};
  cursor: pointer;
  color: ${themedPalette.file_txt};
  transition: all 0.2s;

  &:hover {
    background-color: rgba(208, 40, 133, 0.04);
    color: ${themedPalette.normal_txt};
  }
`;

const FileName = styled.div`
  font-size: 0.8em;
`;

export default Upload;
