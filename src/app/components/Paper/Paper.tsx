import { PaperContainer } from './Paper.style';

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Paper: React.FC<PaperProps> = ({ children }) => {
  return <PaperContainer>{children}</PaperContainer>;
};

export default Paper;
