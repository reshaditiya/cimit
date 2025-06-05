import LinkShortenedModal from '@/components/modals/link-shortened-modal';
import { env } from '@/lib/env';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Modal/Link Shortened Modal',
  component: LinkShortenedModal,
  tags: ['autodocs'],
  args: { link: env.NEXT_PUBLIC_DOMAIN_NAME, onCopyLink: fn() },
} satisfies Meta<typeof LinkShortenedModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
