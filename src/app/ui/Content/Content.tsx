import { styled } from 'styled-components';
import { breakpoints } from '~lib/styles/responsive';
import space from '~lib/styles/space';
import Base from '../Base';

const Content = styled(Base)`
  width: 80%;
  max-width: ${breakpoints.larget};
  padding: ${space[2]};
`;

export default Content;
