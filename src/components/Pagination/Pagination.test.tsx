import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('should render', () => {
    render(<Pagination limit={25} totalResults={1000} />);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('should not render if there are no pages', async () => {
    const rendered = render(<Pagination limit={25} totalResults={0} />);
    const nav = await rendered.container.querySelector<HTMLElement>('nav');

    expect(nav).not.toBeInTheDocument();
  });

  it('should not render ellipsis when less than max number of pages', () => {
    render(<Pagination limit={20} totalResults={60} />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.queryByTestId('etc')).not.toBeInTheDocument();
  });

  it('should render the last group of page numbers when current page is whithin the last max pages shown', () => {
    render(<Pagination limit={20} totalResults={200} currentPageNum={5} />);

    expect(screen.queryByTestId('etc')).not.toBeInTheDocument();
    expect(screen.getByText(/10/)).toBeInTheDocument();
  });

  it('should fire onPageChange handler on previous button click', async () => {
    const mockHandler = vi.fn();
    const rendered = render(
      <Pagination limit={20} totalResults={200} onPageChange={() => mockHandler(1)} currentPageNum={3} />
    );
    await rendered.container.querySelector<HTMLButtonElement>('[data-testid="prevBtn"]')?.click();

    expect(mockHandler).toBeCalled();
  });

  it('should fire onPageChange handler on next button click', async () => {
    const mockHandler = vi.fn();
    const rendered = render(
      <Pagination limit={20} totalResults={200} onPageChange={() => mockHandler(1)} currentPageNum={3} />
    );
    await rendered.container.querySelector<HTMLButtonElement>('[data-testid="nextBtn"]')?.click();

    expect(mockHandler).toBeCalled();
  });

  it('should fire onPageChange handler on page number button click', async () => {
    const mockHandler = vi.fn();
    const rendered = render(
      <Pagination limit={20} totalResults={200} onPageChange={() => mockHandler(1)} currentPageNum={3} />
    );
    await rendered.container.querySelector<HTMLButtonElement>('nav [type="button"]:nth-child(3)')?.click();

    expect(mockHandler).toBeCalled();
  });
});
