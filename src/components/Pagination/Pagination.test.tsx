import { fireEvent, render, screen } from '@testing-library/react';
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

  it('should render the correct number of results when the limit and total results are equal', () => {
    render(<Pagination limit={20} totalResults={20} offset={0} />);
    expect(screen.getByTestId('showing').textContent).toBe('Showing 1 to 20 of 20 results');
  });

  it('should fire onPageChange handler on previous button click', () => {
    const mockHandler = vi.fn();
    render(<Pagination limit={20} totalResults={200} onPageChange={() => mockHandler(1)} currentPageNum={3} />);
    const buttonEl: HTMLButtonElement = screen.getByTestId('prevBtn');
    fireEvent.click(buttonEl);

    expect(mockHandler).toBeCalled();
  });

  it('should fire onPageChange handler on next button click', async () => {
    const mockHandler = vi.fn();
    render(<Pagination limit={20} totalResults={200} onPageChange={() => mockHandler(1)} currentPageNum={3} />);
    const buttonEl: HTMLButtonElement = screen.getByTestId('nextBtn');
    fireEvent.click(buttonEl);

    expect(mockHandler).toBeCalled();
  });

  it('should fire onPageChange handler on first button click', async () => {
    const mockHandler = vi.fn();
    render(<Pagination limit={20} totalResults={200} onPageChange={() => mockHandler(1)} currentPageNum={3} />);
    const buttonEl: HTMLButtonElement = screen.getByTestId('firstBtn');
    fireEvent.click(buttonEl);

    expect(mockHandler).toBeCalled();
  });

  it('should fire onPageChange handler on last button click', async () => {
    const mockHandler = vi.fn();
    render(<Pagination limit={20} totalResults={200} onPageChange={() => mockHandler(1)} currentPageNum={3} />);
    const buttonEl: HTMLButtonElement = screen.getByTestId('lastBtn');
    fireEvent.click(buttonEl);

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

  it('should display the number results', async () => {
    const mockHandler = vi.fn();
    const rendered = render(
      <Pagination limit={20} totalResults={102} currentPageNum={1} onPageChange={() => mockHandler(6)} offset={100} />
    );
    await rendered.container.querySelector<HTMLButtonElement>('nav [type="button"]:nth-child(8)')?.click();

    expect(screen.getByTestId('showing')).toHaveTextContent('Showing 101 to 102 of 102 results');
  });
});
