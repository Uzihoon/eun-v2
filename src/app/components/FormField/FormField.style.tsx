import { styled } from 'styled-components';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';

export const FormFieldContainer = styled.div`
  margin-bottom: ${space[6]};
`;

export const RequiredField = styled.div`
  color: ${themedPalette.required_txt};
  font-weight: bold;
  margin-left: ${space[0]};
`;
