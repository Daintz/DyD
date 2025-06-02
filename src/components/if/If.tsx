
interface Props {
  condition: unknown;
  children: React.ReactNode;
};

export const If = ({ condition, children }: Props) => {
  // Render children only if condition is truthy, otherwise render null
  return condition ? <>{children}</> : null;
};
