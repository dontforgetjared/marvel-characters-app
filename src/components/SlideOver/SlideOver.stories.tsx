import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SlideOver from './SlideOver';

type Story = StoryObj<typeof SlideOver>;

const meta: Meta<typeof SlideOver> = {
  title: 'SlideOver',
  component: SlideOver,
};

export default meta;
export const Basic: Story = {
  args: {
    children: <div style={{ border: '1px solid red', padding: '20px' }}>This is a child element</div>,
    isOpen: true,
    panelTitle: 'Test Panel Title',
    closeHandler: action('Close'),
  },
};
