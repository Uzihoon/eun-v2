interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const Base: React.FC<BaseProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Base;
