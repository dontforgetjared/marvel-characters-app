import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Select from './Select';

import mockOptionsList from './Form.mock';

describe('Select', () => {
  const mockChange = vi.fn();

  it('should render a select component', () => {
    render(<Select options={mockOptionsList} labelText="test-select" handleChange={mockChange} />);
    expect(screen.getByLabelText('test-select')).toBeInTheDocument();
  });

  it('should fire an onchange function', () => {
    render(<Select options={mockOptionsList} handleChange={mockChange} />);
    const selectEl: HTMLSelectElement = screen.getByTestId('select');
    fireEvent.change(selectEl);

    expect(mockChange).toHaveBeenCalled();
  });

  it('should be hiding the label by default', () => {
    render(<Select options={mockOptionsList} labelText="test-select" handleChange={mockChange} />);
    expect(screen.getByText('test-select')).toHaveClass('sr-only');
  });

  it('should show the label', () => {
    render(<Select options={mockOptionsList} labelText="test-select" handleChange={mockChange} showLabel />);
    expect(screen.getByText('test-select')).not.toHaveClass('sr-only');
  });
});
