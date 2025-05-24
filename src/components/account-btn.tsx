import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Button, buttonVariants } from './ui/button';

export default function AccountBtn({
  variant = 'secondary',
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Button variant={variant} {...props}>
      anonymous
    </Button>
  );
}
