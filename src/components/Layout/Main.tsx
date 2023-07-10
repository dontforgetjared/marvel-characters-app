import { ReactNode } from 'react';

interface IMainProps {
  children?: ReactNode;
}
function Main({ children }: IMainProps) {
  return <main className="p-4 lg:p-10 bg-slate-100">{children}</main>;
}

export default Main;
