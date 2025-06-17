'use client';

import type { VariantProps } from 'class-variance-authority';
import { Button, buttonVariants } from '../ui/button';
import { useTranslations } from 'next-intl';
import ResponsiveDialog from '../ui/responsive-dialog';
import { signIn } from '@/lib/auth-client';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';

export default function AccountBtn({
  variant = 'secondary',
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const t = useTranslations('account-btn');

  const { isPending, mutate } = useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: async () => {
      await signIn.social({
        provider: 'google',
      });
    },
  });

  return (
    <ResponsiveDialog
      trigger={
        <Button variant={variant} {...props}>
          {t('login')}
        </Button>
      }
      title={t('modal-title')}
      description={t('modal-desc')}
    >
      <Button
        variant="secondary"
        className="w-full"
        disabled={isPending}
        onClick={() => mutate()}
      >
        <Image src="./google.svg" alt="google" width={16} height={16} />
        {t('login-google')}
      </Button>
    </ResponsiveDialog>
  );
}
