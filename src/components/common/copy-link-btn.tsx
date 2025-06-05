'use client';

import { useState } from 'react';
import { Button, buttonVariants } from '../ui/button';
import { Check, CopyIcon } from 'lucide-react';
import { useTimeout } from '@mantine/hooks';
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
export default function CopyLinkBtn({
  link,
  onCopyLink,
  onClick,
  className,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    link: string;
    onCopyLink: (link: string) => void;
  }) {
  const [isCopied, setisCopied] = useState(false);
  const { start } = useTimeout(() => setisCopied(false), 800);

  return (
    <Button
      variant="secondary"
      size="sm"
      className={cn('mt-4 max-w-full overflow-hidden', className)}
      onClick={(e) => {
        setisCopied(true);
        start();
        onCopyLink(link);
        onClick?.(e);
      }}
      {...props}
    >
      <div>
        <span className="size-3 break-words whitespace-normal">{link}</span>
      </div>
      <div>
        <CopyIcon
          className={cn(
            'size-3 transition',
            !isCopied ? 'opacity-100' : 'size-0 opacity-0'
          )}
        />
        <Check
          className={cn(
            'size-3 transition',
            isCopied ? 'opacity-100' : 'size-0 opacity-0'
          )}
        />
      </div>
    </Button>
  );
}
