import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';
import ImageMock from './Image.mock';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
  title: 'Image',
  component: Image,
};

export default meta;

/* eslint-disable react/jsx-props-no-spreading */
export const Basic: Story = {
  args: {},
  render: () => <Image {...ImageMock} />,
};
export const Rounded: Story = {
  args: {},
  render: () => <Image isRounded {...ImageMock} />,
};
