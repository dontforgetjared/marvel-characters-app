// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
};

export default meta;
export const Basic: Story = {
  args: {
    onClick: action('Button clicked!'),
    children: 'Button',
    disabled: false,
  },
};
