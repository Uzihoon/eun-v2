import IconWrapper from './IconWrapper';
import { IconProps } from './type';

const Close: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </IconWrapper>
);

export default Close;
