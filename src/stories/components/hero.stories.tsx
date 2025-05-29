import HeroForm from '@/components/form/hero-form';
import Hero from '@/components/section/hero';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  subcomponents: { HeroForm },
  args: { onSubmit: fn() },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
