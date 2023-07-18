import { ReactNode } from 'react';

interface IMainProps {
  children?: ReactNode;
}
function Main({ children }: IMainProps) {
  return <main className="p-4 lg:p-10">{children}</main>;
}

export default Main;
