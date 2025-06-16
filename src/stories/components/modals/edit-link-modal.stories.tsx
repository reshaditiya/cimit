import EditLinkModal from '@/components/modals/edit-link-modal';
import { Button } from '@/components/ui/button';
import { linkListData } from '@/lib/mock';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Modals/Edit Link Modal',
  component: EditLinkModal,
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
    onDelete: fn(),
    children: <Button variant="secondary">Open</Button>,
    linkData: linkListData[0],
  },
} satisfies Meta<typeof EditLinkModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
