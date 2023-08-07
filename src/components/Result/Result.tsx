import { ReactNode } from 'react';

interface IResultsP {
  children?: ReactNode;
  content?: string;
  icon?: ReactNode;
  subtitle?: string;
  title?: string;
}

function Result({ children, content = '', icon, subtitle = '', title = '' }: IResultsP) {
  return (
    <div className="text-center bg-slate-100 dark:bg-zinc-600 p-6 w-2/3 mx-auto rounded-md">
      <div className="mx-auto my-0">{icon}</div>
      <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-zinc-200">{title}</h3>
      <h4 className="mt-2 text-sm font-semibold text-gray-900 dark:text-zinc-200">{subtitle}</h4>
      <p className="mt-1 text-sm text-gray-500 dark:text-zinc-200">{content}</p>
      {children}
    </div>
  );
}

export default Result;
