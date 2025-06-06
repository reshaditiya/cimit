import * as React from 'react';

import { cn } from '@/lib/utils';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { useDisclosure } from '@mantine/hooks';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base text-ellipsis shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

interface InputWithIconsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

function InputWithIcons({
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputWithIconsProps) {
  return (
    <div className="relative">
      {leftIcon && (
        <div className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 transform">
          {leftIcon}
        </div>
      )}
      {rightIcon && (
        <div className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2 transform">
          {rightIcon}
        </div>
      )}
      <Input
        className={cn(leftIcon && 'pl-9', rightIcon && 'pr-9', className)}
        {...props}
      />
    </div>
  );
}

function PasswordInput(props: React.ComponentProps<'input'>) {
  const [isVisible, handlers] = useDisclosure();

  return (
    <InputWithIcons
      type={isVisible ? 'text' : 'password'}
      rightIcon={
        isVisible ? (
          <EyeClosedIcon
            className="size-4 cursor-pointer"
            onClick={handlers.close}
            role="button"
          />
        ) : (
          <EyeIcon
            className="size-4 cursor-pointer"
            onClick={handlers.open}
            role="button"
          />
        )
      }
      {...props}
    />
  );
}

export { Input, InputWithIcons, PasswordInput };
