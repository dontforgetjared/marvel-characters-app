import { ReactNode } from 'react';

interface IGridProps {
  children?: ReactNode;
}

function Grid({ children }: IGridProps) {
  return <div className="grid gap-4 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{children}</div>;
}

export default Grid;
