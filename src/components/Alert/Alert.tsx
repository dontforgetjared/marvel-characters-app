import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import joinClasses from '../../utils/joinClasses';

interface IAlertProps {
  type?: 'warning' | 'error' | 'info' | 'success';
  message?: string;
}

function Alert({ type = 'info', message = '' }: IAlertProps) {
  const IconMap = {
    warning: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
    error: <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />,
    info: <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />,
    success: <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />,
  };

  const cssClassesMap = {
    warning: {
      bg: `bg-yellow-50`,
      border: `border-yellow-400`,
      text: `text-yellow-400`,
    },
    error: {
      bg: `bg-red-50`,
      border: `border-red-400`,
      text: `text-red-400`,
    },
    info: {
      bg: `bg-blue-50`,
      border: `border-blue-400`,
      text: `text-blue-400`,
    },
    success: {
      bg: `bg-green-50`,
      border: `border-green-400`,
      text: `text-green-400`,
    },
  };

  return (
    <div className={joinClasses('border-l-4 p-4', cssClassesMap[type].bg, cssClassesMap[type].border)}>
      <div className="flex">
        <div className="flex-shrink-0">{IconMap[type]}</div>
        <div className="ml-3">
          <p className={joinClasses('text-sm', cssClassesMap[type].text)}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Alert;
