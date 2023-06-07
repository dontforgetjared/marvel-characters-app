import { ReactNode } from 'react';

interface IButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

function Button({ children, disabled = false, onClick }: IButtonProps) {
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button className="p-2" onClick={handleClick} type="button" disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
