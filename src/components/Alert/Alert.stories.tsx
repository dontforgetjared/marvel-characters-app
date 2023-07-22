import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
};

export default meta;
export const Basic: Story = {
  args: {
    message: 'This is a message',
  },
  argTypes: {
    type: {
      options: ['info', 'error', 'warning', 'success'],
      control: { type: 'select' },
    },
  },
};
