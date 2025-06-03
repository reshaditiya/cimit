import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, ElementType } from 'react';

type CardContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function SectionTitle<T extends ElementType = 'h2'>({
  as,
  className,
  children,
  ...props
}: CardContainerProps<T>) {
  const Component = as || 'h2';

  return (
    <Component
      className={cn('text-xl font-bold lg:text-3xl', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
