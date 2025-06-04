import FilterSorter from '@/components/sections/filter-sorter';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Sections/Filter Sorter',
  component: FilterSorter,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof FilterSorter>;

export default meta;
type Story = StoryObj<typeof FilterSorter>;

export const Default: Story = {};
