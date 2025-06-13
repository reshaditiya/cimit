import PasswordGuard from '@/components/sections/password-guard';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Sections/Password Guard',
  component: PasswordGuard,
  tags: ['autodocs'],
  args: { onSubmit: fn() },
} satisfies Meta<typeof PasswordGuard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
