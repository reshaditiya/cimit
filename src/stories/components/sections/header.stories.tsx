import Header from '@/components/sections/header';
import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { env } from '@/lib/env';

const meta = {
  title: 'Components/Sections/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    msw: {
      handlers: {
        login: [
          http.post(
            env.NEXT_PUBLIC_BACKEND_URL + '/api/auth/sign-in/social',
            () => {
              return HttpResponse.json({
                accessToken: 'token',
              });
            }
          ),
        ],
      },
    },
  },
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
