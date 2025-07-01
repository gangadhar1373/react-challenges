import type { Meta, StoryObj } from '@storybook/react-vite';
import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {},
};
export const WithInitialCount: Story = {
  args: {
    initialCount: 5,
  },
};
