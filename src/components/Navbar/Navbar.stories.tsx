import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from './Navbar';
import MockLogo, { mockNavItems } from './Navbar.mock';

type Story = StoryObj<typeof Navbar>;

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
};

export default meta;
export const Basic: Story = {
  args: {
    logoComponent: <MockLogo />,
    navItems: mockNavItems,
    includeSearch: true,
    onChangeHandler: action('onChangeHandler!'),
  },
};
