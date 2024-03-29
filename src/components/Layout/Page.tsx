import { ReactNode } from 'react';

interface IPageProps {
  children?: ReactNode;
}

function Page({ children }: IPageProps) {
  return <div className="bg-slate-100 dark:bg-zinc-400 min-h-screen">{children}</div>;
}

export default Page;
