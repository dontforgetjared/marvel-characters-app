import { SyntheticEvent, useState } from 'react';
import joinClasses from '../../utils/joinClasses';

type SelectOptions = {
  label: string;
  value: string;
};

interface ISelectProps {
  elementId?: string;
  handleChange: (e: SyntheticEvent) => void;
  labelText?: string;
  options: SelectOptions[];
  showLabel?: boolean;
}

function Select({ elementId = 'select', handleChange, labelText = '', showLabel = false, options }: ISelectProps) {
  const labelCssClasses = joinClasses(showLabel ? '' : 'sr-only', 'block text-sm font-medium leading-6 text-gray-900');
  const onChangeHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (handleChange) {
      handleChange(e);
    }
  };
  return (
    <div>
      <label htmlFor={elementId} className={labelCssClasses}>
        {labelText}
      </label>
      <select
        className="bg-white mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
        id={elementId}
        name={elementId}
        onChange={onChangeHandler}
        data-testid="select"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
