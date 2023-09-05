interface BaseProps {
  className?: string;
  children?: any;
}

const Base: React.FC<BaseProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Base;
