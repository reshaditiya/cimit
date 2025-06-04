import HeroForm from '@/components/forms/hero-form';
import Hero from '@/components/sections/hero';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Sections/Hero',
  component: Hero,
  tags: ['autodocs'],
  subcomponents: { HeroForm },
  args: { onSubmit: fn() },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
