import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Alert from './Alert';

describe('Alert', () => {
  it('should render an Alert component', () => {
    render(<Alert message="Test message" />);

    expect(screen.getByText(/Test message/i)).toBeInTheDocument();
  });

  it('should render a success type alert', () => {
    render(<Alert message="Test message" type="success" />);

    expect(screen.getByText(/Test message/i)).toHaveClass('text-green-400');
  });
});
