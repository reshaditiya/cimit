import SectionTitle from './section-title';
import CardContainer, { CardContainerProps } from './card-container';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

type CardStateProps = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
} & CardContainerProps<typeof CardContainer>;

export function CardState({
  icon,
  title,
  description,
  className,
}: CardStateProps) {
  const IconComponent = icon;

  return (
    <CardContainer
      className={cn(
        'flex flex-col items-center justify-center gap-6 text-center md:p-20 lg:p-40',
        className
      )}
    >
      <IconComponent className="size-9 lg:size-12" />
      <div className="flex flex-col">
        <SectionTitle>{title}</SectionTitle>
        <p>{description}</p>
      </div>
    </CardContainer>
  );
}
