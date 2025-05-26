import { cn } from '@/lib/utils';

export default function SectionTitle({
  className,
  children,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-xl font-bold lg:text-3xl', className)}
      {...props}
    >
      {children}
    </span>
  );
}
