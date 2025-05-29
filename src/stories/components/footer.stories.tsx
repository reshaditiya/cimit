import Footer from '@/components/section/footer';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    personalDomain: `https://me.${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
