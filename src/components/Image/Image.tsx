import { useState } from 'react';
import joinClasses from '../../utils/joinClasses';

interface IImageP {
  alt: string;
  classNames?: string;
  height?: string;
  isRounded?: boolean;
  src: string;
  width?: string;
}

function Image({ alt, classNames = '', height = 'auto', isRounded = false, src, width = 'auto' }: IImageP) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="animate-pulse">
          <div
            className={joinClasses(isRounded ? 'rounded-full' : '', 'bg-slate-200', classNames)}
            style={{ height, width }}
          />
          <div className="sr-only">Loading</div>
        </div>
      )}
      <img
        className={joinClasses(isLoading ? 'hidden' : '', isRounded ? 'rounded-full' : '', classNames)}
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        style={{ height, width }}
      />
    </>
  );
}

export default Image;
