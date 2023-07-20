import type { Meta, StoryObj } from '@storybook/react';

import SkeletonCard from './SkeletonCard';
import SkeletonCardGrid from './SkeletonCardGrid';

type Story = StoryObj<typeof SkeletonCardGrid>;

const meta: Meta<typeof SkeletonCardGrid> = {
  title: 'Skeleton',
  component: SkeletonCardGrid,
};

export default meta;
export const Card: Story = {
  args: {},
  render: () => <SkeletonCard />,
};
export const CardGrid: Story = {
  args: {},
  render: () => <SkeletonCardGrid cardCount={8} />,
};
