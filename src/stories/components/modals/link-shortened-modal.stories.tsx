import LinkShortenedModal from '@/components/modals/link-shortened-modal';
import { Button } from '@/components/ui/button';
import { env } from '@/lib/env';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Modals/Link Shortened Modal',
  component: LinkShortenedModal,
  tags: ['autodocs'],
  args: {
    link: env.NEXT_PUBLIC_DOMAIN_NAME,
    onCopyLink: fn(),
    children: <Button variant="secondary">Open</Button>,
    expiredAt: new Date(),
  },
} satisfies Meta<typeof LinkShortenedModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
