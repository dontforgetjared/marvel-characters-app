import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import SlideOver from './SlideOver';

describe('SlideOver', () => {
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  const mockHandler = vi.fn();

  beforeEach(() => {
    render(
      <SlideOver closeHandler={mockHandler} panelTitle="Panel Title" isOpen>
        Foo
      </SlideOver>
    );
  });

  it('should render a basic component', () => {
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should render children', () => {
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });

  it('should close on closeHandler click', () => {
    fireEvent.click(screen.getByText(/Close/i));

    expect(mockHandler).toHaveBeenCalled();
  });

  it('should have a panel title', () => {
    expect(screen.getByText('Panel Title')).toBeInTheDocument();
  });
});
