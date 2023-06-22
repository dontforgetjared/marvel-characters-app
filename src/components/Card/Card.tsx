import { ReactNode } from 'react';

interface ICardProps {
  children?: ReactNode;
}

interface ICardImageProps {
  altText?: string;
  imageSrc: string;
}

interface ICardActionsProps {
  actions: {
    href: string;
    label: string;
  }[];
}

function Card({ children }: ICardProps) {
  return (
    <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
      {children}
    </div>
  );
}

function CardBody({ children }: ICardProps) {
  return <div className="flex flex-1 flex-col p-8">{children}</div>;
}

function CardImage({ imageSrc, altText = '' }: ICardImageProps) {
  return <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={imageSrc} alt={altText} />;
}

function CardHeader({ children }: ICardProps) {
  return <h3 className="mt-6 text-sm font-medium text-gray-900">{children}</h3>;
}

function CardText({ children }: ICardProps) {
  return <p className="mt-2 text-sm text-gray-500">{children}</p>;
}

function CardActions({ actions }: ICardActionsProps) {
  return (
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        {actions.map((action) => (
          <div className="flex w-1/2 flex-1 even:-ml-px" key={action.label}>
            <a
              href={action.href}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              {action.label}
            </a>
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
