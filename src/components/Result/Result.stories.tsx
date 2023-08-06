import type { Meta, StoryObj } from '@storybook/react';
import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

import Result from './Result';

type Story = StoryObj<typeof Result>;

const meta: Meta<typeof Result> = {
  title: 'Result',
  component: Result,
};

export default meta;
export const Basic: Story = {
  args: {
    title: 'Successfully Did the Thing!',
    subtitle: 'Good job, friend!',
    content: 'You did the thing. Now you can do other things.',
    icon: <CheckCircleIcon className="mx-auto my-0 h-12 w-12 text-green-400" aria-hidden="true" />,
  },
};
export const WithChild: Story = {
  render: () => (
    <Result
      title="No Results"
      subtitle="Guess we couldn't find anything."
      content="You searched for something that doesn't exist"
      icon={<BookOpenIcon className="mx-auto my-0 h-12 w-12 text-slate-400" aria-hidden="true" />}
    >
      <button className="bg-slate-500 hover:bg-slate-700 p-3 text-white rounded-lg m-2" type="button">
        Call to Action
      </button>
    </Result>
  ),
};
