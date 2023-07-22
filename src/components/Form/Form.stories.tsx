import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from './Select';

import mockOptionsList from './Form.mock';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: 'Form',
  component: Select,
};

export default meta;
export const SelectComponent: Story = {
  args: {
    options: mockOptionsList,
    labelText: 'This is the label',
    handleChange: action('changed'),
    showLabel: true,
  },
};
