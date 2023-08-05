import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';

type Story = StoryObj<typeof Accordion>;

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
};

export default meta;
export const Basic: Story = {
  args: {
    title: 'Title',
    content: 'This is content',
  },
};
