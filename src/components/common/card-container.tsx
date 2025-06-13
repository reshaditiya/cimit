import { cn } from '@/lib/utils';
import { ElementType, ComponentPropsWithoutRef } from 'react';

export type CardContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function CardContainer<T extends ElementType = 'section'>({
  as,
  className,
  children,
  ...props
}: CardContainerProps<T>) {
  const Component = as || 'section';

  return (
    <Component
      className={cn('bg-accent/50 rounded-4xl p-6 lg:p-8', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
