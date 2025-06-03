import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, ElementType } from 'react';

type CardContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function SectionTitle<T extends ElementType = 'span'>({
  as,
  className,
  children,
  ...props
}: CardContainerProps<T>) {
  const Component = as || 'span';

  return (
    <Component
      className={cn('text-xl font-bold lg:text-3xl', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
