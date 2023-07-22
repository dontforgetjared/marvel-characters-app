import type { Meta, StoryObj } from '@storybook/react';

import Page from './Page';
import Main from './Main';
import Grid from './Grid';

type Story = StoryObj<typeof Page>;

const meta: Meta<typeof Page> = {
  title: 'Layout',
  component: Page,
};

export default meta;
export const PageLayout: Story = {
  args: {
    children: <div>Child</div>,
  },
};

export const MainLayout: Story = {
  render: () => <Main>Child</Main>,
};

export const GridLayout: Story = {
  render: () => (
    <Grid>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Grid>
  ),
};
