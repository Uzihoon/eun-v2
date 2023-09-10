import { styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';

export const WarningContent = styled.div`
  margin-bottom: ${space[2]};
`;

export const WarningTitle = styled.div`
  font-weight: bold;
  margin-bottom: ${space[1]};
  margin-top: ${space[1]};
`;

export const WarningBox = styled.div`
  display: flex;
  align-items: center;
`;

export const FileList = styled.div``;

export const FileName = styled.div`
  color: ${themedPalette.normal_txt};
  margin-bottom: ${space[1]};
  padding-left: ${space[0]};
  font-size: 0.9em;

  &:last-child {
    margin-bottom: 0;
  }
`;
