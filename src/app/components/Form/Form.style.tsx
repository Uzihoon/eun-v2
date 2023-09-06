import { styled } from 'styled-components';
import { breakpoints } from '~lib/styles/responsive';
import space from '~lib/styles/space';

export const FormContainer = styled.form`
  width: 80%;
  max-width: ${breakpoints.medium};
  margin: auto;
  padding-bottom: ${space[7]};
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${space[5]};
`;
