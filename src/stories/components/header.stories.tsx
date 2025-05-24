import Header from '@/components/header';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Header',
  component: Header,
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
