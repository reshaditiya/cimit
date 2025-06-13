import { Meta, StoryObj } from '@storybook/react';
import NotFound from '@/app/not-found';

const meta = {
  title: 'Pages/Not Found',
  component: NotFound,
  tags: ['autodocs'],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
