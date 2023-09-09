import { IconProps } from './type';

interface IconWrapperProps extends IconProps {
  children: React.ReactElement | React.ReactElement[];
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, width = 24, height = 24, strokeWidth = 1.5 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className="w-6 h-6"
      width={width}
      height={height}
    >
      {children}
    </svg>
  );
};

export default IconWrapper;
