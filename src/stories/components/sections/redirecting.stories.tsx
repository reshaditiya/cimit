import Redirecting from '@/components/sections/redirecting';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Sections/Redirecting',
  component: Redirecting,
  tags: ['autodocs'],
} satisfies Meta<typeof Redirecting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
