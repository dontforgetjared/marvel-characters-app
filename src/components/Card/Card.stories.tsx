import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from './Card';
// import MockLogo, { mockNavItems } from './Navbar.mock';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

const mockActions = [
  {
    href: 'https://google.com',
    label: 'Google',
  },
  {
    href: 'https://duckduckgo.com',
    label: 'Duck Duck Go',
  },
  {
    href: 'https://bing.com',
    label: 'Bing',
  },
];

export default meta;
export const Basic: Story = {
  args: {},
  render: () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card>
        <Card.Body>
          <Card.Image imageSrc="https://placehold.co/256" altText="Placeholder Image" />
          <Card.Header>Test</Card.Header>
          <Card.Text>
            Cupidatat anim ex magna qui veniam laborum minim pariatur elit laboris. Adipisicing eiusmod cupidatat cillum
            ut ut dolore do ea adipisicing laborum officia. Amet occaecat pariatur ad non non velit. Incididunt esse do
            veniam dolor elit eu Lorem enim sit tempor.
          </Card.Text>
        </Card.Body>
        <Card.Actions actions={mockActions} />
      </Card>
    </div>
  ),
};
