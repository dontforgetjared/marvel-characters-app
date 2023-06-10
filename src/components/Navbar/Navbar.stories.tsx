import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from './Navbar';

type Story = StoryObj<typeof Navbar>;

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
};

function ExampleLogo() {
  return (
    <div>
      <a href="/">🦸</a>
    </div>
  );
}

const exampleNavItems = [
  {
    href: 'https://google.com',
    name: 'Google',
    current: false,
  },
  {
    href: 'https://reddit.com',
    name: 'Reddit',
    current: true,
  },
];

export default meta;
export const Basic: Story = {
  args: {
    logoComponent: <ExampleLogo />,
    navItems: exampleNavItems,
    includeSearch: true,
    onChangeHandler: action('onChangeHandler!'),
  },
};
