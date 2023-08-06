import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Result from './Result';

describe('Result', () => {
  const mockTitle = 'Test title';
  const mockSubTitle = 'Test subtitle';
  const mockContent = 'Adipisicing culpa incididunt ut id cillum amet nulla excepteur.';
  const mockChild = <div>Child component</div>;

  it('should render a Result component', () => {
    render(<Result title={mockTitle} subtitle={mockSubTitle} content={mockContent} />);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByText(mockSubTitle)).toBeInTheDocument();
    expect(screen.getByText(mockContent)).toBeInTheDocument();
  });

  it('should render a Result component with chilren', () => {
    render(
      <Result title={mockTitle} subtitle={mockSubTitle} content={mockContent}>
        {mockChild}
      </Result>
    );

    expect(screen.getByText('Child component')).toBeInTheDocument();
  });
});
