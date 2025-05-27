import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Button, buttonVariants } from './ui/button';
import { useTranslations } from 'next-intl';

export default function AccountBtn({
  variant = 'secondary',
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const t = useTranslations('account-btn');

  return (
    <Button variant={variant} {...props}>
      {t('anonymous')}
    </Button>
  );
}
