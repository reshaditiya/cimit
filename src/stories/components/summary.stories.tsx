import Summary from '@/components/summary';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Summary',
  component: Summary,
  tags: ['autodocs'],
  args: { totalLinks: 2321, totalVisit: 23412 },
} satisfies Meta<typeof Summary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
