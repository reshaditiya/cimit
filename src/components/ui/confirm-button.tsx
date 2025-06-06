'use client';

import { VariantProps } from 'class-variance-authority';
import { Button, buttonVariants } from './button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function ConfirmButton({
  className,
  children,
  onClick,
  ...props
}: Omit<React.ComponentProps<'button'>, 'children'> &
  VariantProps<typeof buttonVariants> & {
    children: (isConfirming: boolean) => React.ReactNode;
    asChild?: boolean;
  }) {
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <Button
      variant="ghost"
      className={cn('text-destructive hover:text-destructive/90', className)}
      onClick={(e) => {
        setIsConfirming(true);
        if (isConfirming) onClick?.(e);
      }}
      {...props}
    >
      {children(isConfirming)}
    </Button>
  );
}
