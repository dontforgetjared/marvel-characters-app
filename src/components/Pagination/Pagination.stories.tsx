import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';

type Story = StoryObj<typeof Pagination>;

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
};

export default meta;
export const Basic: Story = {
  args: {
    limit: 20,
    totalResults: 1562,
  },
};
export const NoETC: Story = {
  args: {
    limit: 20,
    totalResults: 100,
  },
};
export const NoPages: Story = {
  args: {
    limit: 20,
    totalResults: 20,
  },
};
export const WithCurrentPageNumber: Story = {
  args: {
    currentPageNum: 3,
    limit: 20,
    totalResults: 200,
  },
};
export const WithOnPageChangeHandler: Story = {
  args: {
    currentPageNum: 3,
    limit: 20,
    totalResults: 200,
    onPageChange: action('onPageChange'),
  },
};
