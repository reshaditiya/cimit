import LinkList from '@/components/sections/link-list';
import { linkListData } from '@/lib/mock';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Sections/Link List',
  component: LinkList,
  tags: ['autodocs'],
  args: { onShortLinkClick: fn(), onOptionsClick: fn() },
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof LinkList>;

export const Default: Story = { args: { data: linkListData, isLogin: true } };
export const Empty: Story = { args: { data: [], isLogin: true } };
export const NotLoggedIn: Story = { args: { isLogin: false } };
