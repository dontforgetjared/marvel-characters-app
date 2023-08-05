import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Accordion from './Accordion';

describe('Accordion', () => {
  const mockTitle = 'Test title';
  const mockContent = 'Adipisicing culpa incididunt ut id cillum amet nulla excepteur.';

  it('should render a closed accordion', () => {
    render(<Accordion title={mockTitle} content={mockContent} />);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it('should render an opened accordion', () => {
    render(<Accordion title={mockTitle} content={mockContent} />);
    const accordion = screen.getByText(mockTitle);
    fireEvent.click(accordion);

    expect(screen.getByText(mockContent)).toBeInTheDocument();
  });
});
