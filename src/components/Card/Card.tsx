import { ReactNode } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

import Image from '../Image/Image';

interface ICardProps {
  children?: ReactNode;
}

interface ICardImageProps {
  altText?: string;
  imageSrc: string;
}

interface ICardActionsProps {
  actions: {
    onClick?: () => void;
    type: string;
    url?: string;
    isExternal?: boolean;
  }[];
  isExternal?: boolean;
}

function Card({ children }: ICardProps) {
  return (
    <div className="col-span-1 flex flex-col divide-y divide-gray-200 dark:divide-zinc-800 rounded-lg bg-white dark:bg-zinc-600 text-center shadow">
      {children}
    </div>
  );
}

function CardBody({ children }: ICardProps) {
  return <div className="flex flex-1 flex-col p-8">{children}</div>;
}

function CardImage({ imageSrc, altText = '' }: ICardImageProps) {
  return <Image src={imageSrc} alt={altText} height="8rem" width="8rem" classNames="mx-auto" isRounded />;
}

function CardHeader({ children }: ICardProps) {
  return <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-zinc-200">{children}</h3>;
}

function CardText({ children }: ICardProps) {
  return <p className="mt-2 text-sm text-gray-500 dark:text-zinc-300">{children}</p>;
}

function CardActions({ actions }: ICardActionsProps) {
  const externalLink = (isExternal: boolean) => (isExternal ? { rel: 'noreferrer noopener', target: '_blank' } : {});
  return (
    <div>
      <div className="-mt-px flex divide-x divide-gray-200 dark:divide-zinc-800">
        {actions.map((action) => (
          <div className="flex w-1/2 flex-1 even:-ml-px" key={action.type}>
            {/* eslint-disable react/jsx-props-no-spreading */}
            {action.onClick ? (
              <button
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-zinc-200 capitalize"
                onClick={() => action.onClick?.()}
                type="button"
              >
                {action.isExternal && <ArrowTopRightOnSquareIcon className="w-4 h-4" />}
                {action.type}
              </button>
            ) : (
              <a
                href={action.url}
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-zinc-200 capitalize"
                {...externalLink(action.isExternal || false)}
              >
                {action.isExternal && <ArrowTopRightOnSquareIcon className="w-4 h-4" />}
                {action.type}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

Card.Body = CardBody;
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Text = CardText;
Card.Actions = CardActions;
export default Card;
