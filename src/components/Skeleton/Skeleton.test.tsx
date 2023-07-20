import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SkeletonCard from './SkeletonCard';
import SkeletonCardGrid from './SkeletonCardGrid';

describe('Skeleton', () => {
  it('should render a single skeleton card', () => {
    render(<SkeletonCard />);

    expect(screen.getByTestId('skeleton-card')).toBeInTheDocument();
  });

  it('should render a grid of 12 skeleton cards', () => {
    render(<SkeletonCardGrid cardCount={12} />);

    expect(screen.getAllByTestId('skeleton-card').length).toBe(12);
  });
});
